import React, { useRef, useState } from 'react';
import './Profile.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setUser } from '../../redux/actions';

import axios from 'axios';

function Profile() {
	const userData = useSelector((state) => state);
	const dispatch = useDispatch();
	const [userInfo, setUserInfo] = useState({
		name: userData?.name || '',
		email: userData?.email || '',
		phone: userData?.phone || '',
		address: userData?.address || '',
	});
	const inputFile = useRef(null);

	const handleAvatarChange = async (e) => {
		const selectedFile = e.target.files[0];
		const form = new FormData();

		form.append("image", selectedFile);

		const hostImgResult = await axios({
			method: 'post',
			url: 'https://api.imgbb.com/1/upload?&key=56b4d700a8a3259864f162c0cecca770',
			data: form,
			headers:  { "Content-Type": "multipart/form-data" },
		})

		const avatarUrl = hostImgResult?.data?.data?.url;

		const result = await axios.post(`https://bsite.net/waytodev/user/ChangeAvatar/${userData?._Id}`, {
			avatar: avatarUrl
		});
		
		if (result.status == 200) {
			dispatch(
				setUser({
					...userData,
					picture: result?.data?.picture
				})
			);
		}
	};

	const saveProfile = async () => {
		const result = await axios.post(`https://bsite.net/waytodev/user/UpdateInfo/${userData?._Id}`, {
			...userInfo,
			picture: userData?.picture,
		});

		// change userData of redux with new data from result if there is no error
		console.log(result);
		console.log(userData);
		if (result.status == 200) {
			dispatch(
				setUser({
					...userData,
					email: result?.data?.email || "",
					name: result?.data?.name || "",
					phone: result?.data?.phone || "",
					address: result?.data?.address || "",
				})
			);
		}
	}

	return (
		<div className="profile">
			<div class="container">
				<div class="main-body">
					<div class="row">
						<div class="col-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="d-flex flex-column align-items-center text-center">
										{userData?.picture ?
											(
												<img
													src={userData?.picture}
													alt={userData?.name}
													class="rounded-circle p-1 bg-primary"
													onClick={() => inputFile.current.click()}
												/>
											) : <i class="fas fa-user-circle" onClick={() => inputFile.current.click()}></i>
										}
										<div class="mt-3">
											<h4>{userData?.name}</h4>
										</div>
										<input
											accept=".png, .jpg, .jpeg"
											type='file'
											id='file'
											ref={inputFile}
											style={{display: 'none'}}
											onChange={(e) => handleAvatarChange(e)}
										/>
									</div>
									<a
										class="row"
										href="/login"
										style={{
											margin: '0 auto',
											width: 'fit-content',
										}}
										onClick={() => localStorage.clear()}>
										<div class="col-sm-9 text-secondary">
											<input
												type="button"
												class="btn btn-primary px-4"
												value="Logout"></input>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="card">
								<form class="card-body">
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Full Name</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input
												type="text"
												class="form-control"
												value={userInfo?.name}
												autocomplete="off"
												onChange={e => setUserInfo({...userInfo, name: e.target.value})}/>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Email</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input
												type="text"
												class="form-control"
												value={userInfo?.email}
												autocomplete="off"
												onChange={e => setUserInfo({...userInfo, email: e.target.value})}/>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Phone</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input
												type="tel"
												class="form-control"
												value={userInfo?.phone}
												pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
												minlength="13"
    											maxlength="13"
												autocomplete="off"
												onChange={e => setUserInfo({...userInfo, phone: e.target.value})}></input>
										</div>
									</div>

									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Address</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input
												type="text"
												class="form-control"
												value={userInfo?.address}
												autocomplete="off"
												onChange={e => setUserInfo({...userInfo, address: e.target.value})}/>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-3"></div>
										<div class="col-sm-9 text-secondary">
											<input
												type="button"
												class="btn btn-primary px-4"
												value="Save Changes"
												onClick={() => saveProfile()}/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
