import React from 'react';
import './App.css';
import Header from './components/Shared/Header.js';
import MainBaner from './components/Main/MainBaner.js';
import MainCourses from './components/Main/MainCourses.js';
import NewPosts from './components/Main/NewPosts.js';
import Social from './components/Main/Social';
import Footer from './components/Shared/Footer.js';
import AboutLang from './components/Main/AboutLang';
import PostsPage from './components/Posts/PostsPage.js';
import PostPage from './components/Posts/PostPage.js';
import CoursesPage from './components/Courses/CoursesPage.js';
import BooksPage from './components/Books/BooksPage.js';
import Login from './components/Login/Login.js';
import Contacts from './components/Contacts/Contacts.js';
import Languages from './components/Languages/Languages.js';
import Profile from './components/Profile/Profile.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FoundError from './components/Shared/FoundError';
import AuthError from './components/Shared/Error';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<React.Fragment>
									<MainBaner />
									<MainCourses />
									<NewPosts />
									<Social />
									<AboutLang />
								</React.Fragment>
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route
						path="/posts"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<PostsPage />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route
						path="/posts/:id"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<PostPage />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route
						path="/courses"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<CoursesPage />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route
						path="/books"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<BooksPage />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route path="/login" exact element={<Login />} />

					{/* <Route
						path="/contacts"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<Contacts />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/> */}

					<Route
						path="/languages"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<Languages />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route
						path="/profile"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<Profile />
							) : (
								<Navigate replace to="/login" />
							)
						}
					/>

					<Route path="/*" exact element={<FoundError />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
