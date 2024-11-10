import { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
    date: string;
}

const useFetchPost = (id?: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
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
                        date: new Date(2020, 0, 1).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        }),
                    };

                    setPost(detailedPost);
                } catch (error) {
                    setError("Error fetching post or photo.");
                    console.error("Error fetching post or photo:", error);
                }
            } else {
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
                        date: new Date(2020, 0, 1).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        }),
                    }));

                    setPosts(postsWithPhotos);
                } catch (error) {
                    setError("Error fetching posts or photos.");
                    console.error("Error fetching posts or photos:", error);
                }
            }
        };

        fetchPost();
    }, [id]);

    return { post, posts, error };
};

export default useFetchPost;
