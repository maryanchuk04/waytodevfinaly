import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllBooks.css";
import BooksPage from "../BooksPage";
function AllBooks() {
	const [book, setBooks] = useState([]);

	useEffect(() => {
		axios
			.get("https://bsite.net/waytodev/book")
			.then((result) => {
				console.log(result.data);
				setBooks(result.data.filter(book => book?.image != undefined));
			});
	}, []);

	const handleImgError = (errorIndex) => {
		setBooks(book.filter((book, index) => index != errorIndex));
	};

	return (
		<div class="allBooks">
			<div className="mainBooks">
			<div className="container">
					<div clasName="books">
				<div classsName="books_header">
						<div className="books_title"><h1>Programming books</h1></div>
					</div>
					
                        
					< div className="book">
						{book.map(
							(book, index) =>
								index < 20 && (
									<div class="book_intro" key={book._Id}>
										<div class="image">
										<img src={book.image} onError={() => handleImgError(index)} />
										</div>
										<div class="alltext">
										  <div class="book_text">
											<h1>{book.title}</h1>
										  </div>
										  
										  <div class="description">
											{book.description}
										  </div>
										  <div class="book_avtor">
											Avtor:{book.avtor}
										  </div>
										   <a className="custom-btn btn-9" target="_blank" href={book.link}></a>
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
