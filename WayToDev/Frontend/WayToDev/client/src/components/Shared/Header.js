import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header class="header" >
            <div class="header-container">
                <div class="logo">
                    <a href="/"> WayToDev </a>
                </div>
                <nav class="stroke">
                    <ul>
                      <li><a href="#"><nav><Link to="/posts">IT Articles</Link></nav></a></li>
                      <li><a href="#"><nav><Link to="/courses">Courses</Link></nav></a></li>
                      <li><a href="#"><nav><Link to="/books">Books</Link></nav></a></li>
                      <li><a href="#"><nav><Link to="/contacts">Contacts</Link></nav></a></li>
      	              <li><a href="#"><nav><Link to="/login">Log in</Link></nav></a></li>
                      <li><a href="#"><nav><Link to="/signup">Sign up</Link></nav></a></li>
                    </ul>
                </nav>
            </div>
        </header> 
    )
}
export default Header;
