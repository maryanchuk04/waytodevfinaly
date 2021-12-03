import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCourses.css";
import MainVideoPopup from "../../Main/MainVideoPopup.js";

function AllCourses() {
	const [courses, setCourses] = useState([]);
	const [currentVideoCode, setCurrentVideoCode] = useState("");
	const [showVideo, setShowVideo] = useState(false);

	useEffect(() => {
		axios
			.get("https://waytodev.azurewebsites.net/courses")
			.then((result) => {
				console.log(result.data);
				setCourses(result.data);
			});
	}, []);

	const handleShowVideo = (videoCode) => {
		setShowVideo(true);
		setCurrentVideoCode(videoCode);
	};

	const handleCloseVideo = () => {
		setShowVideo(false);
	};

	return (
		<>
			<div class="allCourses">
				<div className="container">
					<div className="mainCourses2">
						<div clasName="corses">
							<div classsName="courses_header">
								<div className="corses_title">
									Programming courses
								</div>
								<a href="/" className="courses_btn csbtn">
									All
								</a>
							</div>
							<div class="slider"></div>
							<div class="video">
								{courses.map(
									(course, index) =>
										index < 20 && (
											<div
												class="video_intro"
												key={course._Id}
												onClick={() =>
													handleShowVideo(
														course.link.split(
															"v="
														)[1]
													)
												}>
												<img
													src={`https://img.youtube.com/vi/${
														course.link.split(
															"v="
														)[1]
													}/0.jpg`}
													alt={course.name_course}
												/>
												<div className="video_btn">
													<button className="video_playbtn">
														<i class="fas fa-play"></i>
													</button>
													<div class="video_text">
														{course.name_course}
													</div>
													<div class="video_avtor">
														{course.avtor}
													</div>
												</div>
											</div>
										)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{showVideo && (
				<MainVideoPopup
					showVideo={showVideo}
					videoCode={currentVideoCode}
					handleCloseVideo={handleCloseVideo}
				/>
			)}
		</>
	);
}

export default AllCourses;
