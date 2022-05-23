import React, { useState, useEffect } from "react";
import "../components/AllPost.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AllPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("https://bsite.net/waytodev/post").then((result) => {
			setPosts(result.data);
		});
	}, []);

	return (
		<div className="allPosts">
			<div className="container">
				<h1>Articles</h1>
				<section className="posts">
					{posts.map((post) => (
						<Link key={post._Id} to={`/posts/${post._Id}`}>
							<article>
								<div className="postImg">
									<img src={post.picture} alt={post.title} />
								</div>
								<div className="postInfo">
									<h3>{post.title}</h3>
									<p>
										{post.short_text.length > 250
											? post.short_text.substr(0, 250) +
											  "..."
											: post.short_text}
									</p>
								</div>
							</article>
						</Link>
					))}
				</section>
			</div>
		</div>
	);
}

export default AllPosts;
