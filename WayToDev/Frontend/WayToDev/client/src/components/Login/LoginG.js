import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './LoginG.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginG() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
		// TODO:
		// fix google login/signup
		// cross origin errors
		axios
			.post('https://bsite.net/waytodev/user/GoogleLogin', {
				Name: response.profileObj.givenName,
				Email: response.profileObj.email,
				picture: response.profileObj.imageUrl,
			})
			.then((result) => {
				console.log(result);
				axios
					.get(
						`https://bsite.net/waytodev/user/${result.data.user._Id}`
					)
					.then((data) => {
						console.log(data);
						dispatch(
							setUser({
								_Id: result.data?.user?._Id,
								email: data?.data?.email || "",
								password: null,
								access_token: result.data.access_token,
								picture: data?.data?.picture || "",
								name: data?.data?.name || "",
								phone: data?.data?.phone || "",
								adress: data?.data?.adress || "",
							})
						);
						window.location = '/profile';
					})
					.catch((err) => {
						console.log(err);
					});
			});
	};
	return (
		<div className="loginG">
			<GoogleLogin
				clientId="970054821358-csu9i12dkd45asv2prhjh6htcsifrhmj.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				isSingnedIn={true}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
}
export default LoginG;
