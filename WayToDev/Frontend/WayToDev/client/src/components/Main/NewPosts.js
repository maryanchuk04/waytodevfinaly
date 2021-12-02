import React, { useState, useEffect } from "react";
import "./NewPosts.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

function NewPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("https://waytodev.azurewebsites.net/post").then((result) => {
			setPosts(result.data);
		});
	}, []);

	return (
		<div className="newPosts" id="posts">
			<div className="container">
				<div>
					<h1>New posts</h1>

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
				<LinkScroll
					to="aboutlang"
					className="scrollDown"
					spy={true}
					smooth={true}
					duration={500}>
					<span></span>
				</LinkScroll>
			</div>
		</div>
	);
}

export default NewPosts;
