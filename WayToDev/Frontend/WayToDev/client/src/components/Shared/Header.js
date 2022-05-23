import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
	const [toggleBurger, setToggleBurger] = useState(false);
	const [isSticky, setSticky] = useState(false);
	const navigate = useNavigate();
	const userData = useSelector((state) => state);

	useEffect(() => {
		if (window.location.pathname === '/') {
			const sticky = window.innerHeight;
			const scrollCallBack = window.addEventListener('scroll', () => {
				if (window.pageYOffset > sticky) {
					setSticky(true);
				} else {
					setSticky(false);
				}
			});
			return () => {
				window.removeEventListener('scroll', scrollCallBack);
			};
		}
	}, [navigate]);

	return (
		<header
			className={`header ${
				isSticky && window.location.pathname === '/' ? ' sticky' : ''
			}`}
			id="myHeader">
			<div class="header-container">
				<div class="logo">
					<Link to="/"> WayToDev </Link>
				</div>
				<nav class="stroke">
					<button
						class={`burger ${toggleBurger && 'opened'}`}
						onClick={() => setToggleBurger(!toggleBurger)}
						aria-label="Main Menu"
						aria-expanded={toggleBurger}>
						<svg width="100" height="100" viewBox="0 0 100 100">
							<path
								class="line line1"
								d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
							/>
							<path class="line line2" d="M 20,50 H 80" />
							<path
								class="line line3"
								d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
							/>
						</svg>
					</button>

					<ul className={toggleBurger && 'showHeader'}>
						<li>
							<Link to="/posts">IT Articles</Link>
						</li>
						<li>
							<Link to="/courses">Courses</Link>
						</li>
						<li>
							<Link to="/books">Books</Link>
						</li>
						{/* <li>
							<Link to="/contacts">Contacts</Link>
						</li> */}
						{userData.access_token !== '' ? (
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
