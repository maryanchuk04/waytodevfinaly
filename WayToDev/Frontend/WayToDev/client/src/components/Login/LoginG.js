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

		axios
			.post('http://waytodev.somee.com/user/registr', {
				Name: response.profileObj.givenName,
				Email: response.profileObj.email,
				picture: response.profileObj.imageUrl,
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
								email: response.profileObj.email,
								password: null,
								access_token: result.data.access_token,
								picture: data.data.picture,
								name: response.profileObj.givenName,
							})
						);
						navigate('/profile');
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
