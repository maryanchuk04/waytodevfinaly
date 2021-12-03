import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostPage.css";

function PostPage() {
	const [postInfo, setPostInfo] = useState({});
	const [likeState, setLikeState] = useState({
		count: 0,
		active: false,
	});
	const { id } = useParams();
	const userData = useSelector((state) => state);

	useEffect(() => {
		axios
			.get(`https://waytodev.azurewebsites.net/post/id/${id}`)
			.then((result) => {
				console.log(result);
				if (result.data) {
					setPostInfo(result.data);
					setLikeState({
						active: result.data.like.some(
							(elem) => elem.user_id === userData.user_id
						),
						count: result.data.like.length,
					});
				}
			});
		console.log(userData);
		console.log(localStorage.getItem("access_token"));
	}, []);

	const handleLike = () => {
		console.log(userData);
		console.log(id);
		userData.user_id !== "" &&
			axios
				.post(`https://waytodev.azurewebsites.net/post/like`, {
					post_id: id,
					IsLike: !likeState.active,
					user_id: userData.user_id,
				})
				.then((result) => {
					console.log(result);
					likeState.count !== result.data.count &&
						setLikeState({
							count: result.data.count,
							active: !likeState.active,
						});
				});
	};

	return (
		<div className="postPage">
			<div className="container">
				<img src={postInfo.picture} alt={postInfo.title} />
				<div className="postInfo">
					<h1>{postInfo.title}</h1>
					<p dangerouslySetInnerHTML={{ __html: postInfo.text }}></p>
					<div className="postInfoLikes" onClick={() => handleLike()}>
						<div
							className={`heart ${
								likeState.active ? "is-active" : ""
							}`}></div>
						{likeState.count}
					</div>
				</div>
			</div>

			<div className="container postInfoContainer">
				<h4>{postInfo.name_user}</h4>
				<form>
					<input type="text" placeholder="Your message..." />
					<button type="submit">
						<i class="fas fa-paper-plane"></i>
					</button>
				</form>
			</div>
		</div>
	);
}

export default PostPage;
