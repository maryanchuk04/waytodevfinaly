import React from 'react';
import './Profile.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
	const userData = useSelector((state) => state);
	console.log(userData);

	return (
		<div className="profile">
			<div class="container">
				<div class="main-body">
					<div class="row">
						<div class="col-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="d-flex flex-column align-items-center text-center">
										<img
											src={userData?.picture}
											alt={userData?.name}
											class="rounded-circle p-1 bg-primary"></img>
										<div class="mt-3">
											<h4>{userData?.name}</h4>
										</div>
									</div>
									<hr class="my-4"></hr>
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
								<div class="card-body">
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Full Name</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input
												type="text"
												class="form-control"
												value={userData?.name}></input>
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
												value={userData?.email}></input>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Phone</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input
												type="text"
												class="form-control"
												value={userData?.phone}></input>
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
												value={
													userData?.address
												}></input>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-3"></div>
										<div class="col-sm-9 text-secondary">
											<input
												type="button"
												class="btn btn-primary px-4"
												value="Save Changes"></input>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
