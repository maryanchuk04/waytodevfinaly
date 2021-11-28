import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PostPage.css";

function PostPage() {
	const [postInfo, setPostInfo] = useState({});
	const [likeState, setLikeState] = useState({
		count: 0,
		active: false,
	});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://waytodev.azurewebsites.net/post/id/${id}`)
			.then((result) => {
				console.log(result);
				if (result.data) {
					setPostInfo(result.data);
					setLikeState({
						...likeState,
						count: result.data.like !== null ? result.data.like : 0,
					});
				}
			});
	}, []);

	useEffect(() => {
		axios.post(
			`https://waytodev.azurewebsites.net/post/like/${id}`,
			likeState.active ? 1 : 0
		);
	}, [likeState]);

	return (
		<div className="postPage">
			<div className="container">
				<img src={postInfo.picture} alt={postInfo.title} />
				<div className="postInfo">
					<h1>{postInfo.title}</h1>
					<p>{postInfo.text}</p>
					<div
						className="postInfoLikes"
						onClick={() =>
							setLikeState({
								count: likeState.active
									? likeState.count - 1
									: likeState.count + 1,
								active: !likeState.active,
							})
						}>
						<div
							class={`heart ${
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
