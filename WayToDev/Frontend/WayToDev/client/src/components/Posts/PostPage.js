import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PostPage.css';
import AuthError from '../Shared/Error';

const commentsArr = [
	{
		picture:
			'https://static.wikia.nocookie.net/286c608f-6b73-4e8a-a89f-fd5a3da764f2',
		name: 'Naruto',
		text: 'I will become hokage, you will see!',
	},
	{
		picture:
			'https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/10/Sasuke-Uchiha-Rinnegan-Users.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
		name: 'Sasuke',
		text: 'Protect my friends and my village thats my prioraty now.',
	},
	{
		picture:
			'https://3dnews.ru/assets/external/illustrations/2020/11/10/1024969/01.jpg',
		name: 'Spider man',
		text: "Lets have some fun, and yeah I'm Spider man",
	},
];

function PostPage() {
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
		console.log(userData);

		axios.get(`http://waytodev.somee.com/post/id/${id}`).then((result) => {
			console.log(result);
			if (result.data) {
				setPostInfo(result.data);
				setLikeState({
					active: result.data.like.some(
						(elem) => elem.user_id === userData._Id
					),
					count: result.data.like.length,
				});
			}
		});
		console.log(userData);
		console.log(localStorage.getItem('access_token'));
	}, []);

	const handleLike = () => {
		console.log(userData);
		console.log(id);
		userData._Id !== ''
			? axios
					.post(`http://waytodev.somee.com/post/like`, {
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

		axios
			.post('http://waytodev.somee.com/post/comment', {
				user_id: userData._Id,
				post_Id: id,
				text: 'test comment',
			})
			.then((result) => {
				console.log(result);
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

			{userData._Id && (
				<div className="container postInfoContainer">
					<h4>{userData.name}</h4>
					<form onSubmit={(e) => handleSendComment(e)}>
						<input type="text" placeholder="Your message..." />
						<button type="submit">
							<i class="fas fa-paper-plane"></i>
						</button>
					</form>
				</div>
			)}

			<div className="commentsContainer">
				{commentsArr.map((comment) => (
					<div className="comment">
						<img
							src={comment.picture}
							alt={`${comment.name}'s picture`}
						/>
						<div className="commentInfo">
							<h5>{comment.name}</h5>
							{comment.text}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default PostPage;
