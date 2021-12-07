import React from "react";
import "./Social.css";
function Social() {
	return (
		<div className="socials" id="aboutlang">
			<div className="container">
				<h1>Subscribe to us!</h1>
				<p>
					Join the community of programmers, learn a lot from the IT
					world and be aware of all the events!
				</p>

				<div className="social_links">
					<div class="wrapper">
						<div class="button">
							<div class="icon">
								<a
									href="https://www.facebook.com/ffrgd.ewexa"
									target="_blank"
									rel="noreferrer">
									<i class="fab fa-facebook-f"></i>
								</a>
							</div>
							<a
								href="https://www.facebook.com/ffrgd.ewexa"
								target="_blank"
								rel="noreferrer">
								<span class="icon_btn">Facebook</span>
							</a>
						</div>
						<div class="button">
							<div class="icon">
								<a
									href="https://twitter.com/?lang=uk"
									target="_blank "
									rel="noreferrer">
									{" "}
									<i class="fab fa-twitter"></i>
								</a>
							</div>
							<a
								href="https://twitter.com/?lang=uk"
								target="_blank "
								rel="noreferrer">
								<span>Twitter</span>
							</a>
						</div>
						<div class="button">
							<div class="icon">
								<a
									href="https://www.instagram.com/_maryanchukm_/"
									target="_blank"
									rel="noreferrer">
									<i class="fab fa-instagram"></i>
								</a>
							</div>
							<a
								href="https://www.instagram.com/_maryanchukm_/"
								target="_blank"
								rel="noreferrer">
								<span>Instagram</span>
							</a>
						</div>
						<div class="button">
							<div class="icon">
								<a
									href="https://web.telegram.org/z/"
									target="_blank"
									rel="noreferrer">
									<i class="fab fa-telegram"></i>
								</a>
							</div>
							<a
								href="https://web.telegram.org/z/"
								target="_blank"
								rel="noreferrer">
								<span>Telegram</span>
							</a>
						</div>
						<div class="button">
							<div class="icon">
								<a
									href="https://www.youtube.com/"
									target="_blank"
									rel="noreferrer">
									<i class="fab fa-youtube"></i>
								</a>
							</div>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noreferrer">
								<span>YouTube</span>
							</a>
						</div>
						<div class="button">
							<div class="icon">
								<a
									href="https://github.com/maryanchuk04"
									target="_blank"
									rel="noreferrer">
									<i class="fab fa-github"></i>
								</a>
							</div>
							<a
								href="https://github.com/maryanchuk04"
								target="_blank"
								rel="noreferrer">
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Social;
