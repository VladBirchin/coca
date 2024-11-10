// components/PostDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css"
import SocialShare from "../../components/SocialShare/SocialShare";

interface Post {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
    date: string;
}

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);

    const generateRandomDate = () => {
        const start = new Date(2020, 0, 1);
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())); // Генерація випадкової дати між start і end


        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };


        return date.toLocaleDateString('en-US', options);
    };


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const photoResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

                const postData = await postResponse.json();
                const photoData = await photoResponse.json();

                const detailedPost = {
                    id: postData.id,
                    title: postData.title,
                    body: postData.body,
                    imageUrl: photoData?.url || "https://via.placeholder.com/600",
                    date: generateRandomDate(),
                };

                setPost(detailedPost);
            } catch (error) {
                console.error("Error fetching post or photo:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post">
            <SocialShare/>

            <span>{post.date}</span>
            <h1>{post.title}</h1>
            <img src={post.imageUrl} alt={post.title}/>
            <div className="post_content">
                <p>{post.body}</p>
                <div className="content_text">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                </div>
                <div className="main_info">
                    “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”
                </div>
                <div className="content_text">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                </div>
            </div>


        </div>
    );
};

export default PostDetail;
