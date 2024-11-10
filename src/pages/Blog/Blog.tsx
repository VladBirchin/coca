import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Blog.css";

interface Post {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
    date: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const generateRandomDate = () => {
        const start = new Date(2020, 0, 1);
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        return date.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
                const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");

                const postsData = await postsResponse.json();
                const photosData = await photosResponse.json();

                const postsWithPhotos = postsData.map((post: any, index: number) => ({
                    id: post.id,
                    title: post.title,
                    body: post.body.slice(0, 100) + "...",
                    imageUrl: photosData[index]?.thumbnailUrl || "https://via.placeholder.com/150",
                    date: generateRandomDate(),
                }));

                setPosts(postsWithPhotos.slice(-4)); // Вибираємо 4 останніх пости
            } catch (error) {
                console.error("Error fetching posts or photos:", error);
            }
        };

        fetchPosts();
    }, []);

    return (

        <div className="blog">
            <div className="blog_subtitle">Blog & Article</div>
            <div className="blog_title">News & Article</div>
            <div className="blog-container">
                {posts.length > 0 && (
                    <div className="featured-post">
                        <Link to={`/post/${posts[0].id}`}  className="no-underline">
                            <img src={posts[0].imageUrl} alt={posts[0].title} />
                            <span>{posts[0].date}</span>
                            <h2>{posts[0].title}</h2>
                            <p>{posts[0].body}</p>
                        </Link>
                    </div>
                )}
                <div className="other-posts">
                    {posts.slice(1).map((post) => (
                        <div key={post.id} className="post-items">
                            <Link to={`/post/${post.id}`}  className="no-underline">
                                <div className="blog-item">
                                    <img src={post.imageUrl} alt={post.title} className="post-image"/>
                                    <div className="post-info">
                                        <span>{post.date}</span>
                                        <h2>{post.title}</h2>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};


export default Blog;



