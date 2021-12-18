import React from "react";
import "./Profile.css";

function Profile() {
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
											src="https://api.icons8.com/download/660fc92e39d6c564045636121a69db9c850515ce/windows10/PNG/512/Very_Basic/contacts-512.png"
											alt="Admin"
											class="rounded-circle p-1 bg-primary"></img>
										<div class="mt-3">
											<h4>John Doe</h4>
										</div>
									</div>
									<hr class="my-4"></hr>
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
												value="John Doe"></input>
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
												value="john@example.com"></input>
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
												value="(239) 816-9029"></input>
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
												value="Bay Area, San Francisco, CA"></input>
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
