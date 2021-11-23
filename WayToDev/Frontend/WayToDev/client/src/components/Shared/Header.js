import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header class="header">
			<div class="header-container">
				<div class="logo">
					<Link to="/"> WayToDev </Link>
				</div>
				<div class="menu">
					<nav>
						<Link to="/posts">IT Articles</Link>
					</nav>

					<nav>
						<Link to="/courses">Courses</Link>
					</nav>

					<nav>
						<Link to="/books">Books</Link>
					</nav>

					<nav>
						<Link to="/contacts">Contacts</Link>
					</nav>

					<nav>
						<Link to="/login">Log in</Link>
					</nav>

					<nav>
						<Link to="/signup">Sign up</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
