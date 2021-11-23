import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./components/Shared/Header.js";
import MainBaner from "./components/Main/MainBaner.js";
import MainCourses from "./components/Main/MainCourses.js";
import NewPosts from "./components/Main/NewPosts.js";
import Social from "./components/Main/Social";
import Footer from "./components/Shared/Footer.js";
import AboutLang from "./components/Main/AboutLang";
import PostsPage from "./components/Posts/PostsPage.js";
import CoursesPage from "./components/Courses/CoursesPage.js";
import BooksPage from "./components/Books/BooksPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<React.Fragment>
								<MainBaner />
								<MainCourses />
								<NewPosts />
								<Social />
								<AboutLang />
								<Footer />
							</React.Fragment>
						}
					/>

					<Route path="/posts" element={<PostsPage />} />

					<Route path="/courses" element={<CoursesPage />} />

					<Route path="/books" element={<BooksPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
