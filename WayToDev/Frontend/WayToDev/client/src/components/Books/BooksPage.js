import React from "react";
import "./BooksPage.css";

import "../Shared/Footer.js"
import Footer from "../Shared/Footer.js";
import AllBooks from "../Books/components/AllBooks.js";

function BooksPage() {
	return <div>	
		<AllBooks/>	
        <Footer/>
		
		</div>;


	

}

export default BooksPage;
