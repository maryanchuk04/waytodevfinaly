import React from 'react'
import './Header.css';

function Header() {
    return (
        <header class="header" >
            <div class="header-container">
                <div class="logo">
                    <a href="/"> WayToDev </a>
                </div>
                <nav class="stroke">
                    <ul>
                      <li><a href="#">IT Articles</a></li>
                      <li><a href="#">Courses</a></li>
                      <li><a href="#">Books</a></li>
                      <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header> 
    )
}

export default Header
