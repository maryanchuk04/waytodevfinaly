import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PostPage.css';
import AuthError from '../Shared/Error';
import { current } from '@reduxjs/toolkit';

function PostPage() {
	const [dummyState, setDummyState] = useState(false);
	const [currentComment, setCurrentComment] = useState('');
	const [postInfo, setPostInfo] = useState({});
	const [likeState, setLikeState] = useState({
		count: 0,
		active: false,
	});
	const { id } = useParams();
	const userData = useSelector((state) => state);
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		setShowError(false);

		axios.get(`https://bsite.net/waytodev/post/id/${id}`).then((result) => {
			if (result?.data) {
				setPostInfo({
					...result?.data,
					comment: result?.data?.comment?.reverse(),
				});
				setLikeState({
					active: result?.data?.like?.some(
						(elem) => elem.user_id === userData._Id
					),
					count: result?.data?.like?.length,
				});
			}
		});
	}, [dummyState]);

	const handleLike = () => {
		userData._Id !== ''
			? axios
					.post(`https://bsite.net/waytodev/post/like`, {
						post_id: id,
						IsLike: !likeState.active,
						user_id: userData._Id,
					})
					.then((result) => {
						console.log(result);
						likeState.count !== result.data.count &&
							setLikeState({
								count: result.data.count,
								active: !likeState.active,
							});
					})
			: setShowError(true);
	};

	const handleSendComment = (e) => {
		e.preventDefault();
		console.log(userData);
		axios
			.post('https://bsite.net/waytodev/post/comment', {
				user: {
					name: userData?.name,
					email: userData?.email,
					picture: userData?.picture,
					_Id: userData?._Id,
				},
				post_Id: id,
				text: currentComment,
			})
			.then((result) => {
				console.log(result);
				setDummyState(!dummyState);
				setCurrentComment('');
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
								likeState.active ? 'is-active' : ''
							}`}></div>
						{likeState.count}
					</div>
				</div>
			</div>

			{showError && <AuthError />}

			<div className="container postInfoContainer">
				<h4>{userData.name}</h4>
				<form onSubmit={(e) => handleSendComment(e)}>
					<input
						type="text"
						placeholder="Your message..."
						onChange={(e) => setCurrentComment(e.target.value)}
						value={currentComment}
					/>
					<button type="submit">
						<i class="fas fa-paper-plane"></i>
					</button>
				</form>
			</div>

			<div className="commentsContainer">
				{postInfo?.comment?.map((comment) => (
					<div className="comment">
						{comment?.user?.picture ?
							(
								<img
									src={comment?.user?.picture}
									alt={`${comment?.user?.name}'s picture`}
								/>
							) : <i class="fas fa-user-circle"></i>
						}
						<div className="commentInfo">
							<h5>{comment?.user?.name}</h5>
							{comment.text}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default PostPage;
