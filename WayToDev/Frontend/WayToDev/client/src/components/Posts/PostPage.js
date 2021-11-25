import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PostPage.css";

function PostPage() {
	const [postInfo, setPostInfo] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://waytodev.azurewebsites.net/post/id/${id}`)
			.then((result) => {
				console.log(result);
				result.data && setPostInfo(result.data);
			});
	}, []);

	return (
		<div className="postPage">
			<div className="container">
				<img src={postInfo.picture} alt={postInfo.title} />
				<div className="postInfo">
					<h1>{postInfo.title}</h1>
					<p>{postInfo.text}</p>
				</div>
			</div>
		</div>
	);
}

export default PostPage;
