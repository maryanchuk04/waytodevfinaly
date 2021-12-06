import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
	const [isSticky, setSticky] = useState(false);
	const navigate = useNavigate();
	const userData = useSelector((state) => state);

	useEffect(() => {
		if (window.location.pathname === "/") {
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
		<header
			className={`header ${
				isSticky && window.location.pathname === "/" ? " sticky" : ""
			}`}
			id="myHeader">
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
						{userData.access_token !== "" ? (
							<li>
								<Link to="/profile">
									{userData.picture === null ? (
										<i class="fas fa-user-circle"></i>
									) : (
										<img
											src={userData.picture}
											alt={userData.name}
										/>
									)}
								</Link>
							</li>
						) : (
							<li>
								<Link to="/login">Log in</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
