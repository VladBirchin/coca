import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchPost from "../../hooks/useFetchPost"; // Import the custom hook
import useGenerateDate from "../../hooks/useGenerateDate"; // Import the date hook
import "./PostList.css";

const PostList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const POSTS_PER_PAGE = 8;

    const { posts, error } = useFetchPost(); // Use the hook to fetch posts
    const generateRandomDate = useGenerateDate(); // Use the date generation hook

    // Update posts with random dates
    const postsWithDates = posts.map((post) => ({
        ...post,
        date: generateRandomDate(),
    }));

    const visiblePosts = postsWithDates.slice(0, currentIndex + POSTS_PER_PAGE);

    const loadMorePosts = () => {
        setCurrentIndex(currentIndex + POSTS_PER_PAGE);
    };

    if (error) return <div>{error}</div>;

    return (
        <div className="container">
            <h1>New Post</h1>
            <div className="subtitle">
                Velit officia consequat duis enim velit mollit
            </div>
            <ul className="post-list">
                {visiblePosts.map((post) => (
                    <li key={post.id} className="post-item">
                        <Link to={`/post/${post.id}`}>
                            <img src={post.imageUrl} alt={post.title} />
                            <span>{post.date}</span>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            {visiblePosts.length < posts.length && (
                <button onClick={loadMorePosts}>Load more posts</button>
            )}
        </div>
    );
};

export default PostList;
