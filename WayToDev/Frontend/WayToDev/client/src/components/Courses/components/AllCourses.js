import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCourses.css";
import MainVideoPopup from "../../Main/MainVideoPopup.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AllCourses() {
	const [courses, setCourses] = useState([]);
	const [currentVideoCode, setCurrentVideoCode] = useState("");
	const [showVideo, setShowVideo] = useState(false);
	const [categoryVideo, setCategoryVideo] = useState("all");
	const sliderSettings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
		draggable: false,
	};

	useEffect(() => {
		axios
			.get("http://waytodev.somee.com/courses")
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

	const handleChangeCategory = (e, category) => {
		e.preventDefault();

		setCategoryVideo(category);
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
								<Slider {...sliderSettings}>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "Python")
										}
										href="/"
										className="courses_btn csbtn"
										title="Python">
										<img src="https://itproger.com/img/spravka/python.svg" />
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "Java")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/java.svg"
											title="Java"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "C++")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/cpp.svg"
											title="С++"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "C#")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/csharp.svg"
											title="C#"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "PHP")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/php.svg"
											title="PHP"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "JS")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/javascript.svg"
											title="JavaScript"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "CSS")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/css.svg"
											title="CSS"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "HTML")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://itproger.com/img/spravka/html.svg"
											title="Html"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "Swift")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://i.ibb.co/fGJvjN4/swift.png"
											title="Swift"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "Ruby")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://i.ibb.co/SJ9Csn0/ruby-1.png"
											title="Ruby"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "Go")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://i.ibb.co/S7WNZTB/go.png"
											title="Go"
										/>
									</a>
									<a
										onClick={(e) =>
											handleChangeCategory(e, "all")
										}
										href="/"
										className="courses_btn csbtn">
										<img
											src="https://cdn.iconscout.com/icon/premium/png-512-thumb/other-1995801-1686737.png"
											title="All"
										/>
									</a>
								</Slider>
								
							</div>
							<div class="slider"></div>
							<div class="video">
								{courses.map((course, index) =>
									categoryVideo === course.category ? (
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
									) : (
										categoryVideo === "all" && (
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
