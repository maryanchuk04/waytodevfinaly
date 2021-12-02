import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
	const [isSticky, setSticky] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === "/") {
			const header = document.getElementById("myHeader");
			const sticky = window.innerHeight;
			const scrollCallBack = window.addEventListener("scroll", () => {
				if (window.pageYOffset > sticky) {
					setSticky(true);
				} else {
					setSticky(false);
				}
			});
			return () => {
				window.removeEventListener("scroll", scrollCallBack);
			};
		}
	}, [navigate]);

	return (
		<header className={`header ${isSticky ? " sticky" : ""}`} id="myHeader">
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
