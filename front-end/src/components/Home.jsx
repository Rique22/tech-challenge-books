import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main class='container-fluid'>
            <section class='card text-center' id="homeCard">
                <h1>Bem-vindo ao gerenciamento de livros</h1>
                <div class='row'>
                    <div class='col-6 text-center' id='colButtonHome'>
                        <Link class='btn' id='linkHomebutton' aria-current='page' to='/'>Home</Link>
                    </div>
                    <div class='col-6 text-center' id='colButtonList'>
                        <Link class="btn" id='linkListbutton' to="/list-book">Lista de livros</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;