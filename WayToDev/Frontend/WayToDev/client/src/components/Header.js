import React from 'react'
import './Header.css';

function Header() {
    return (
        <header class="header" >
            <div class="header-container">
                <div class="logo">
                    <a href="/"> WayToDev </a>
                </div>
                <div class="menu">
                    <nav>IT Articles</nav>
                    <nav>Courses</nav>
                    <nav>Books</nav>
                    <nav>Contacts</nav>
                </div>
            </div>
        </header> 
    )
}

export default Header
