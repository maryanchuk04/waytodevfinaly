import React, { useState } from "react";
import "./Social.css";
function Social() {
	const [showEmail, setShowEmail] = useState(false);

	return (
		<div className="socials" id="aboutlang">
			<div className="container">
				<div
					class="background"
					style={{
						transform: `translate(-50%, -50%) scale(${
							showEmail ? 1 : 0
						})`,
					}}>
					<div class="container">
						<div class="screen">
							<div class="screen-header">
								<div class="screen-header-left">
									<div
										class="screen-header-button close"
										onClick={() =>
											setShowEmail(false)
										}></div>
									<div class="screen-header-button maximize"></div>
									<div class="screen-header-button minimize"></div>
								</div>
								<div class="screen-header-right">
									<div class="screen-header-ellipsis"></div>
									<div class="screen-header-ellipsis"></div>
									<div class="screen-header-ellipsis"></div>
								</div>
							</div>
							<div class="screen-body">
								<div class="screen-body-item left">
									<div class="app-title">
										<span>CONTACT</span>
										<span>US</span>
									</div>
								</div>
								<div class="screen-body-item">
									<div class="app-form">
										<div class="app-form-group message">
											<textarea
												class="app-form-control"
												placeholder="MESSAGE"></textarea>
										</div>
										<div class="app-form-group buttons">
											<button
												class="app-form-button"
												onClick={() =>
													setShowEmail(false)
												}>
												CANCEL
											</button>
											<button
												class="app-form-button"
												onClick={() =>
													setShowEmail(false)
												}>
												SEND
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="subscribe">
					<div class="subscribe__tous">
						<h1>Subscribe to us!</h1>
						<p>
							Join the community of programmers, learn a lot from
							the IT world and be aware of all the events!
						</p>

						<div className="social_links">
							<div class="wrapper">
								<div class="button">
									<div class="icon">
										<a
											href="https://www.facebook.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-facebook-f"></i>
										</a>
									</div>
									<a
										href="https://www.facebook.com/"
										target="_blank"
										rel="noreferrer">
										<span class="icon_btn">Facebook</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://twitter.com/"
											target="_blank "
											rel="noreferrer">
											{" "}
											<i class="fab fa-twitter"></i>
										</a>
									</div>
									<a
										href="https://twitter.com/"
										target="_blank "
										rel="noreferrer">
										<span>Twitter</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://www.instagram.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-instagram"></i>
										</a>
									</div>
									<a
										href="https://www.instagram.com/"
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
											href="https://github.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-github"></i>
										</a>
									</div>
									<a
										href="https://github.com/"
										target="_blank"
										rel="noreferrer">
										<span>GitHub</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="feedback">
						<div class="rating-text">
							<p>Rate our website</p>
						</div>
						<div class="rating">
							<form class="rating-form">
								<label
									for="super-happy"
									onClick={() => setShowEmail(true)}>
									<input
										type="radio"
										name="rating"
										class="super-happy"
										id="super-happy"
										value="super-happy"
									/>
									<svg viewBox="0 0 24 24">
										<path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
									</svg>
								</label>

								<label
									for="happy"
									onClick={() => setShowEmail(true)}>
									<input
										type="radio"
										name="rating"
										class="happy"
										id="happy"
										value="happy"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlns="http://www.w3.org/1999/xlink"
										version="1.1"
										width="100%"
										height="100%"
										viewBox="0 0 24 24">
										<path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
									</svg>
								</label>

								<label
									for="neutral"
									onClick={() => setShowEmail(true)}>
									<input
										type="radio"
										name="rating"
										class="neutral"
										id="neutral"
										value="neutral"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlns="http://www.w3.org/1999/xlink"
										version="1.1"
										width="100%"
										height="100%"
										viewBox="0 0 24 24">
										<path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" />
									</svg>
								</label>

								<label
									for="sad"
									onClick={() => setShowEmail(true)}>
									<input
										type="radio"
										name="rating"
										class="sad"
										id="sad"
										value="sad"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlns="http://www.w3.org/1999/xlink"
										version="1.1"
										width="100%"
										height="100%"
										viewBox="0 0 24 24">
										<path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" />
									</svg>
								</label>

								<label
									for="super-sad"
									onClick={() => setShowEmail(true)}>
									<input
										type="radio"
										name="rating"
										class="super-sad"
										id="super-sad"
										value="super-sad"
									/>
									<svg viewBox="0 0 24 24">
										<path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" />
									</svg>
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Social;
