import React, { useState, useEffect } from "react";
import "./MainCourses.css";
import axios from "axios";
import MainVideoPopup from "./MainVideoPopup.js";
import { Link } from "react-scroll";


function MainCourses() {
	const [courses, setCourses] = useState([]);
	const [currentVideoCode, setCurrentVideoCode] = useState("");
	const [showVideo, setShowVideo] = useState(false);

	useEffect(() => {
		axios
			.get("https://bsite.net/waytodev/courses")
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
			<div className="mainCourses" id="courses">
				<div className="corses">
					<div className="container">
						<div className="courses_header">
							<div className="corses_title">Video courses</div>
							<a href="/courses" className="courses_btn csbtn">
								All courses
							</a>
						</div>

						<div class="video">
							{courses.map(
								(course, index) =>
									index < 6 && (
										<div
											class="video_intro"
											key={course._Id}
											onClick={() =>
												handleShowVideo(
													course.link.split("v=")[1]
												)
											}>
											<img
												src={`https://img.youtube.com/vi/${
													course.link.split("v=")[1]
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
			{showVideo && (
				<MainVideoPopup
					videoCode={currentVideoCode}
					handleCloseVideo={handleCloseVideo}
					showVideo={showVideo}
				/>
			)}
		</>
	);
}

export default MainCourses;
