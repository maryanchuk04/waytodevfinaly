import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCourses.css";
function AllCourses() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios
			.get("https://waytodev.azurewebsites.net/courses")
			.then((result) => {
				console.log(result.data);
				setCourses(result.data);
			});
	}, []);
	return (
		<div class="allCourses">
				<div className="container">
			        <div className="mainCourses">
		
					<div clasName="corses">
				<div classsName="courses_header">
						<div className="corses_title">Programming courses</div>
						<a href="/" className="courses_btn csbtn">All</a>
					</div>

					<div class="video">
						{courses.map(
							(course, index) =>
								index < 20 && (
									<div class="video_intro" key={course._Id}>
										<iframe
											width="100%"
											src={`https://www.youtube.com/embed/${
												course.link.split("v=")[1]
											}?showinfo=0&controls=1`}
											title={course.name_course}
											frameborder="0	"
											allowfullscreen></iframe>
										<div class="video_text">
											{course.name_course}
										</div>
										<div class="video_avtor">
											{course.avtor}
										</div>
									</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
		</div>
		);
}

export default AllCourses;
