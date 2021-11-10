import React, { useState, useEffect } from "react";
import "./NewPosts.css";
import axios from "axios";

function NewPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
	axios.get("https://waytodev.azurewebsites.net/post").then((result) => {
		console.log(result);
		setPosts(result.data);
	});
	}, []);

	return (
		<div className="newPosts">
			<div className="container">
				<h1>New posts</h1>

				<section className="posts">
					{posts.map(
						(post, index) =>
							index < 6 && (
								<article key={post._Id}>
									<div className="postImg">
										<img
											src={post.picture}
											alt={post.title}
										/>
									</div>
									<div className="postInfo">
										<h3>{post.title}</h3>
										<p>
											{post.short_text.length > 250
												? post.short_text.substr(
														0,
														250
												  ) + "..."
												: post.short_text}
										</p>
										{/* <div className="additionalInfo">
									<div className="postViews">
										<i class="fas fa-eye"></i>
										<span>{post.views}</span>
									</div>
									<div className="postDate">
										<i class="far fa-clock"></i>
										<span>{post.date}</span>
									</div>
								</div> */}
									</div>
								</article>
							)
					)}
				</section>
			</div>
		</div>
	);
}

export default NewPosts;
