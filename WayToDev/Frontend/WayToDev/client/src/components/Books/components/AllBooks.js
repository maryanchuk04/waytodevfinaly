import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllBooks.css";
import BooksPage from "../BooksPage";
function AllBooks() {
	const [book, setBooks] = useState([]);

	useEffect(() => {
		axios
			.get("https://waytodev.azurewebsites.net/book")
			.then((result) => {
				console.log(result.data);
				setBooks(result.data);
			});
	}, []);
	return (
		<div class="allBooks">
			<div className="mainBooks">
			<div className="container">
					<div clasName="books">
				<div classsName="books_header">
						<div className="books_title">Programming courses</div>
						<a href="/" className="books_btn csbtn">All</a>
					</div>

					<div class="video">
						{book.map(
							(book, index) =>
								index < 20 && (
									<div class="book_intro" key={book._Id}>
										<img src="https://kniga.biz.ua/images/goods/big/26084.jpg"/>
										<div class="book_text">
											{book.title}
										</div>
										<div class="book_avtor">
											{book.avtor}
										</div>
									</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
		</div>
		);
}

export default AllBooks;
