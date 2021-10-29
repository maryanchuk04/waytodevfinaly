import React from "react";
import "./MainCourses.css";

function MainCourses() {
	return (
		<div className="mainCourses">
			<div className="corses">
				<div className="container">
					<div className="corses">
						<div className="courses_header">
							<div className="corses_title">Video courses</div>
							<button className="corses_button">
								All courses [90]
							</button>
						</div>
						<div class="video">
							<div class="video_intro">
								<div class="video_text">Name</div>
								<div class="video_amount">12 clases</div>
							</div>
							<div class="video_intro">
								<div class="video_text">Name</div>
								<div class="video_amount">12 clases</div>
							</div>
							<div class="video_intro">
								<div class="video_text">Name</div>
								<div class="video_amount">12 clases</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainCourses;
