import React, { useEffect, useRef } from "react";
import "./MainBaner.css";
import Globe from "react-globe.gl";
import { Link } from "react-router-dom";

function MainBaner() {
	const globeEl = useRef();

	// Gen random data
	const N = 20;
	const arcsData = [...Array(N).keys()].map(() => ({
		startLat: (Math.random() - 0.5) * 180,
		startLng: (Math.random() - 0.5) * 360,
		endLat: (Math.random() - 0.5) * 180,
		endLng: (Math.random() - 0.5) * 360,
		color: [
			["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
			["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
		],
	}));

	useEffect(() => {
		globeEl.current.controls().autoRotate = true;
		globeEl.current.controls().autoRotateSpeed = 2;
		globeEl.current.controls().enableZoom = false;

		globeEl.current.pointOfView({ altitude: 4 }, 5000);
	}, []);

	return (
		<div class="mainBaner">
			<div class="container">
				<div class="banerLeft">
					<h1>
						Develop yourself as a developer with our team{" "}
						<span>WayToDev</span>
					</h1>

					<p>
						We teach web programming, game creation and software
						development. Take courses, solve problems, view news and
						become real programming masters!
					</p>

					<Link to="/contacts" class="banerButton banerReadMore">
						Read More
					</Link>
				</div>

				<div className="banerGlobe">
					<Globe
						ref={globeEl}
						globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
						arcsData={arcsData}
						arcColor={"color"}
						arcDashLength={() => Math.random()}
						arcDashGap={() => Math.random()}
						arcDashAnimateTime={() => Math.random() * 4000 + 500}
						backgroundColor="rgba(0,0,0,0)"
						initialCameraDistanceRadiusScale={0}
					/>
					
				</div>
  						
			</div>
				<div class="container2">
					<a href="#"><span></span></a>
				</div>
		</div>
	);
}

export default MainBaner;
