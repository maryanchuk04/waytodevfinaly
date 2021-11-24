import React from "react";
import "./CoursesPage.css";
import "../Shared/Footer.js"
import Footer from "../Shared/Footer.js";
import AllCourses from "./components/AllCourses.js";

function CoursesPage() {
	return (
		<div >
			<AllCourses />
			<Footer />
		</div>
		);
}

export default CoursesPage;
