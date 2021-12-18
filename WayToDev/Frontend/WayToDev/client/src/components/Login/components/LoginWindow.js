import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './LoginWindow.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions.js';
import { useNavigate } from 'react-router-dom';
import LoginG from '../LoginG.js';

function LoginWindow() {
	const [signInUp, setSignInUp] = useState(false);
	const [signInData, setSignInData] = useState({
		email: '',
		password: '',
	});
	const [signUpData, setSignUpData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const userData = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		console.log(userData);
	}, [userData]);

	const handleSignIn = (e) => {
		e.preventDefault();
		axios
			.post(`http://waytodev.somee.com/user/login`, {
				Email: signInData.email,
				password: signInData.password,
			})
			.then((result) => {
				axios
					.get(
						`http://waytodev.somee.com/user/${result.data.user_id}`
					)
					.then((data) => {
						console.log(data);
						dispatch(
							setUser({
								_Id: result.data.user_id,
								email: signInData.email,
								password: signInData.password,
								access_token: result.data.access_token,
								picture: data.data.picture,
								name: data.data.Name,
							})
						);
						navigate('/profile');
						window.location.reload();
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		axios
			.post(`http://waytodev.somee.com/user/registr`, {
				Name: signUpData.name,
				Email: signUpData.email,
				password: signUpData.password,
			})
			.then((result) => {
				console.log(result);
				axios
					.get(
						`http://waytodev.somee.com/user/${result.data.user_id}`
					)
					.then((data) => {
						console.log(data);
						dispatch(
							setUser({
								_Id: result.data.user_id,
								email: signUpData.email,
								password: signUpData.password,
								access_token: result.data.access_token,
								picture: data.data.picture,
								name: signUpData.name,
							})
						);
						navigate('/profile');
						window.location.reload();
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div className="allcomponents">
				<div
					className={`container ${signInUp && 'right-panel-active'}`}
					id="container">
					<div className="form-container sign-up-container">
						<form action="#">
							<h1>Create Account</h1>
							<div className="social-container">
								<LoginG />
							</div>
							<span>or use your email for registration</span>
							<input
								type="text"
								placeholder="Name"
								onChange={(e) =>
									setSignUpData({
										...signUpData,
										name: e.target.value,
									})
								}
							/>
							<input
								type="email"
								placeholder="Email"
								onChange={(e) =>
									setSignUpData({
										...signUpData,
										email: e.target.value,
									})
								}
							/>
							<input
								type="password"
								placeholder="Password"
								onChange={(e) =>
									setSignUpData({
										...signUpData,
										password: e.target.value,
									})
								}
							/>
							<button onClick={(e) => handleSignUp(e)}>
								Sign UP
							</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form action="#">
							<h1>Sign IN</h1>

							<div className="social-container">
								<LoginG />
							</div>
							<span>or use your account</span>
							<input
								type="email"
								placeholder="Email"
								onChange={(e) =>
									setSignInData({
										...signInData,
										email: e.target.value,
									})
								}
							/>
							<input
								type="password"
								placeholder="Password"
								onChange={(e) =>
									setSignInData({
										...signInData,
										password: e.target.value,
									})
								}
							/>
							<button
								type="submit"
								onClick={(e) => handleSignIn(e)}>
								Sign In
							</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>
									To keep connected with us please login with
									your personal info
								</p>
								<button
									className="ghost"
									id="signIn"
									onClick={() => setSignInUp(!signInUp)}>
									Sign In
								</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>
									Enter your personal details and start
									journey with us
								</p>
								<button
									className="ghost"
									id="signUp"
									onClick={() => setSignInUp(!signInUp)}>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginWindow;
