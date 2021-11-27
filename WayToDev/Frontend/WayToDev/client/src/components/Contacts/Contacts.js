import React from "react";
import Slider from "react-slick";
import "./Contacts.css";
import { DEVS_INFO } from "../../utils/index.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Contacts() {
	const devs = DEVS_INFO;
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="contacts">
			<div className="container">
				<div className="contactsCard">
					<Slider {...sliderSettings}>
						{devs.map((developer) => (
							<div className="contactsFlex">
								<img
									src={developer.img}
									alt={developer.name}
									className="contactsImg"
								/>
								<div className="contactsInfo">
									<h6>Hello everyone, I am</h6>
									<h1>{developer.name}</h1>
									<h6>{developer.position}</h6>
									<p>{developer.description}</p>

									<div className="contactsPrivateInfo">
										<div>
											<i class="far fa-calendar-alt"></i>
											{developer.birthday}
										</div>
										<div>
											<i class="fas fa-phone"></i>
											{developer.phone}
										</div>
										<div>
											<i class="far fa-envelope"></i>
											{developer.email}
										</div>
										<div>
											<i class="far fa-address-card"></i>
											{developer.address}
										</div>
									</div>

									<div className="contactsSocials">
										<a
											href={developer.socials.facebook}
											target="_blank"
											className="facebook">
											<i class="fab fa-facebook-f"></i>
										</a>
										<a
											href={developer.socials.instagram}
											target="_blank"
											className="instagram">
											<i class="fab fa-instagram"></i>
										</a>
										<a
											href={developer.socials.github}
											target="_blank"
											className="github">
											<i class="fab fa-github"></i>
										</a>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
