import React from "react";
import "./AboutLang.css";

import { Link } from "react-scroll";

function AboutLang() {
	return (
		<div class="languages">
			<div class="container">
				<div class="pictures">
					<img
						src="https://i.ibb.co/yFFFXyP/0-02-05-b29e4502427b2086c7cb33c360e579acdb0b47569d8cfaf6bae2287a57aadb-20-7ee29e28cab4ff8b.png"
						alt="programming"
						height="350px"></img>
				</div>

				<div class="text">
					<div class="text_title">
						<h1>
							Still haven't decided on the right programming
							language for you?
						</h1>
					</div>
					<div class="text_subtitle">
						<p>
							If you still haven't decided which programming
							language you like best, or you just don't know what
							to choose, we can help you ...
						</p>
					</div>
					<a href="/books" className="language_btn langbtn">
						READ MORE
					</a>
				</div>
				<Link
					to="myBaner"
					className="scrollDown reverse"
					offset={-85}
					spy={true}
					smooth={true}
					duration={500}>
					<span></span>
				</Link>
			</div>
		</div>
	);
}

export default AboutLang;
