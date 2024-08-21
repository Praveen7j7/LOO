"use client";
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from "../firebase"; // Adjust the import based on your Firebase configuration
import Post from './Post';

function Posts({ posts }) { // Accept 'posts' as a prop for server-side rendered data
    // Define the query for the posts collection
    const [realtimePosts, loading, error] = useCollection(
        query(collection(db, "posts"), orderBy("timestamp", "desc"))
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {
                realtimePosts
                ? realtimePosts?.docs.map((post) => (
                    <Post
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        temp={post.data().image}
                        postImage={post.data().image } // Conditional logic for image
                    />
                ))
                : (
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            name={post.name}
                            message={post.message}
                            email={post.email}
                            timestamp={post.timestamp}
                            image={post.image}
                            postImage={post.postImage}
                        />
                    ))
                )
            }
        </div>
    );
}

export default Posts;
