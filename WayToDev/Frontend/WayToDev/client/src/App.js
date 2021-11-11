import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./components/Header.js";
import MainBaner from "./components/MainBaner.js";
import MainCourses from "./components/MainCourses.js";
import NewPosts from "./components/NewPosts.js";
import Social from "./components/Social";
import Footer from "./components/Footer";
import AboutLang from "./components/AboutLang";
import PostsPage from "./components/PostsPage.js";
import CoursesPage from "./components/CoursesPage.js";
import BooksPage from "./components/BooksPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="app">
			<Header />
			<BrowserRouter>
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
