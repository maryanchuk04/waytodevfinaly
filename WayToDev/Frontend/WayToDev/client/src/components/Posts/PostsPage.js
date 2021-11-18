import React from "react";

import "../Shared/Footer.js"
import Footer from "../Shared/Footer.js";

import Posts from "../Posts/components/AllPost.js";
function PostsPage() {
	return (
		<div>
			<Posts />
			<Footer />
		</div>
		);
}
export default PostsPage;
