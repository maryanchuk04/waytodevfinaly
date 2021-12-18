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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
								<AuthError />
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
								<AuthError />
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
								<AuthError />
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
								<AuthError />
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
								<AuthError />
							)
						}
					/>

					<Route path="/login" exact element={<Login />} />

					<Route
						path="/contacts"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<Contacts />
							) : (
								<AuthError />
							)
						}
					/>

					<Route
						path="/languages"
						exact
						element={
							localStorage.getItem('userInfo') !== null ? (
								<Languages />
							) : (
								<AuthError />
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
								<AuthError />
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
