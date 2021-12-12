import React from 'react';
import './Error.css';

import { Link } from 'react-router-dom';

function Error() {
	return (
		<div class="mainError">
			<a class="error">
				<header class="top-header"></header>
				<div>
					<div class="starsec"></div>
					<div class="starthird"></div>
					<div class="starfourth"></div>
					<div class="starfifth"></div>
				</div>

				<div class="lamp__wrap">
					<div class="lamp">
						<div class="cable"></div>
						<div class="cover"></div>
						<div class="in-cover">
							<div class="bulb"></div>
						</div>
						<div class="light"></div>
					</div>
				</div>

				<section class="error">
					<div class="error__content">
						<div class="error__message message">
							<h1 class="message__title">Not Authorized</h1>
							<p class="message__text">
								We're sorry, but if you want to have access to
								all of our features, please login first.
							</p>
						</div>
						<div class="error__nav e-nav">
							<Link to="/login" class="e-nav__link"></Link>
						</div>
					</div>
				</section>
			</a>
		</div>
	);
}

export default Error;
