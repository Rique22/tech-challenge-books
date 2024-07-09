/**
 * In this script, You'll have database connection and sql commands: insert,
 * select, delete and update.
 * 
 * @author Henrique Bernardo
 * @version 1.0
 */

/**
 * Database connection
 * 
 * @returns return database connection
 */
async function connect() {
  if (global.connection)
    return global.connection.connect();

  const { Pool } = require('pg');//exporting pg library
  //configuring access
  const pool = new Pool({
    user: 'postgres.dsbbfzqsetikyhtkikuo',
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    database: 'postgres',
    password: 'n8jQJasW8K3yE5Sc',
    port: 6543
  });

  //test connection
  const books = await pool.connect();
  console.log("Criou pool de conexões no PostgreSQL!");

  const res = await books.query('SELECT NOW()');
  console.log(res.rows[0]);
  books.release();

  //saving to always use the same one
  global.connection = pool;
  return pool.connect();
}

//table name
const table = 'books';

/**
 * Select all books
 * 
 * @returns {Object} return all books from database
 */
async function selectionBooks() {
  const books = await connect();
  const res = await books.query(`SELECT * FROM ${table}`);
  return res.rows;
}

/**
 * Select a book
 * 
 * @param {Number} id
 * @returns {Object} return a book
 */
async function selectionBook(id) {
  const books = await connect();
  const res = await books.query(`SELECT * FROM ${table} WHERE ID=$1`, [id]);
  return res.rows;
}

/**
 * Delete a book
 * 
 * @param {Number} id 
 * @returns return a sql command
 */
async function deleteBook(id) {
  const book = await connect();
  return await book.query(`DELETE FROM ${table} where id=$1;`, [id]);
}

/**
 * Insert a book
 * 
 * @param {Object} book 
 * @returns return a sql command
 */
async function insertBook(book) {
  const books = await connect();
  const sql = `INSERT INTO ${table}(name, author, publishing_company) VALUES ($1,$2,$3);`;
  const values = [book.name, book.author, book.publishing_company];
  return await books.query(sql, values);
}

/**
 * Update a book
 * 
 * @param {Number} id 
 * @param {Object} book 
 * @returns return a sql command
 */
async function updateBook(id, book) {
  const books = await connect();
  let sql = ``;
  let values = [id];
  
  if (book.name != null && book.author != null &&
    book.publishing_company != null) {
    sql = `UPDATE ${table} SET name=$1, author=$2, publishing_company=$3 WHERE id=$4`;
    values.unshift(book.name, book.author, book.publishing_company);
  } else if (book.name != null && book.author != null) {
    sql = `UPDATE ${table} SET name=$1, author=$2 WHERE id=$3`;
    values.unshift(book.name, book.author);
  } else if (book.name != null && book.publishing_company != null) {
    sql = `UPDATE ${table} SET name=$1, publishing_company=$2 WHERE id=$3`;
    values.unshift(book.name, book.publishing_company);
  } else if (book.author != null && book.publishing_company != null) {
    sql = `UPDATE ${table} SET author=$1, publishing_company=$2 WHERE id=$3`;
    values.unshift(book.author, book.publishing_company);
  } else if (book.name != null) {
    sql = `UPDATE ${table} SET name=$1 WHERE id=$2`;
    values.unshift(book.name);
  } else if (book.author != null) {
    sql = `UPDATE ${table} SET author=$1 WHERE id=$2`;
    values.unshift(book.author);
  } else if (book.publishing_company != null) {
    sql = `UPDATE ${table} SET publishing_company=$1 WHERE id=$2`;
    values.unshift(book.publishing_company);
  }

  return await books.query(sql, values);
}

//exporting functions
module.exports = { selectionBooks, selectionBook, deleteBook, insertBook, updateBook };