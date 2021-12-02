import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

function Header() {
	return (
		<header class="header" id="header">
			<div class="header-container">
				<div class="logo">
					<Link to="/"> WayToDev </Link>
				</div>
				<nav class="stroke">
					<ul>
						<li>
							<Link to="/posts">IT Articles</Link>
						</li>
						<li>
							<Link to="/courses">Courses</Link>
						</li>
						<li>
							<Link to="/books">Books</Link>
						</li>
						<li>
							<Link to="/contacts">Contacts</Link>
						</li>
						<li>
							<Link to="/login">Log in</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
