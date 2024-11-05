import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav class='navbar navbar-expand-lg'>
            <div class="container-fluid">
                <Link class='navbar-brand' to='/' id='linkTitle'>Gerenciador de livros</Link>
                <div class='collapse navbar-collapse'>
                    <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li class='nav-item'>
                            <Link class='nav-link' aria-current='page' to='/' id='linkHome'>Home</Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' to='/list-book' id='linkList'>Lista de livros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;