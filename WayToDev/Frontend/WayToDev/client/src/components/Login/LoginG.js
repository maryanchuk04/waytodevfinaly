import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./LoginG.css";

export class LoginG extends Component {
	responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	};
	render() {
		return (
			<div className="loginG">
				<GoogleLogin
					clientId="970054821358-csu9i12dkd45asv2prhjh6htcsifrhmj.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={this.responseGoogle}
					isSingnedIn={true}
					onFailure={this.responseGoogle}
					cookiePolicy={"single_host_origin"}
				/>
			</div>
		);
	}
}
export default LoginG;
