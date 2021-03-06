import React, { useState, useEffect } from "react";
import "./NewPosts.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

function NewPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("https://bsite.net/waytodev/post").then((result) => {
			setPosts(result.data);
		});
	}, []);

	return (
		<div className="newPosts" id="posts">
			<div className="container">
				<div>
					<div class="header__posts">
						<h1>New posts</h1>
						<a href="/posts" className="courses_btn csbtn">
							All posts
						</a>
					</div>

					<section className="posts">
						{posts.map(
							(post, index) =>
								index < 6 && (
									<Link
										key={post._Id}
										to={`/posts/${post._Id}`}>
										<article>
											<div className="postImg">
												<img
													src={post.picture}
													alt={post.title}
												/>
											</div>
											<div className="postInfo">
												<h3>{post.title}</h3>
												<p>
													{post.short_text.length >
													250
														? post.short_text.substr(
																0,
																200
														  ) + "..."
														: post.short_text}
												</p>
											</div>
										</article>
									</Link>
								)
						)}
					</section>
				</div>
			</div>
		</div>
	);
}

export default NewPosts;
