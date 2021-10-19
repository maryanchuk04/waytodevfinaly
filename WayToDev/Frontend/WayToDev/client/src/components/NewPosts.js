import React, {useState} from 'react'
import './NewPosts.css';

function NewPosts() {
    const [posts, setPosts] = useState([
        {
            id:1,
            img:"https://itproger.com/img/news/1633896448.png",
            headerText: "6 priceless libraries for JavaScript",
            text: "Notice how JavaScript has grown a lot in recent years? It has so many handy features, efficient frameworks and useful libraries! We will introduce you to the most popular ones right now.",
            views: 784,
            date: "15 october 2021 at 18:05"
        },
        {
            id:2,
            img:"https://itproger.com/img/news/1633896448.png",
            headerText: "6 priceless libraries for JavaScript",
            text: "Notice how JavaScript has grown a lot in recent years? It has so many handy features, efficient frameworks and useful libraries! We will introduce you to the most popular ones right now.",
            views: 784,
            date: "15 october 2021 at 18:05"
        },
        {
            id:3,
            img:"https://itproger.com/img/news/1633896448.png",
            headerText: "6 priceless libraries for JavaScript",
            text: "Notice how JavaScript has grown a lot in recent years? It has so many handy features, efficient frameworks and useful libraries! We will introduce you to the most popular ones right now.",
            views: 784,
            date: "15 october 2021 at 18:05"
        },
        {
            id:4,
            img:"https://itproger.com/img/news/1633896448.png",
            headerText: "6 priceless libraries for JavaScript",
            text: "Notice how JavaScript has grown a lot in recent years? It has so many handy features, efficient frameworks and useful libraries! We will introduce you to the most popular ones right now.",
            views: 784,
            date: "15 october 2021 at 18:05"
        }
    ]);

    return (
        <div className="newPosts">
            <div className="container">
                <h1>New posts</h1>

                <section className="posts">
                    {posts.map((post) => (
                        <article key={post.id}>
                            <img src={post.img} alt={post.headerText}/>
                            <div className="postInfo">
                                <h3>{post.headerText}</h3>
                                <p>{post.text}</p>
                                <div className="additionalInfo">
                                    <div className="postViews">
                                        <i class="fas fa-eye"></i>
                                        <span>{post.views}</span>
                                    </div>
                                    <div className="postDate">
                                        <i class="far fa-clock"></i>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default NewPosts
