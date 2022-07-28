import axios from "axios"
import { useEffect, useState } from "react";
import CommentCeate from "./commentCeate";

export default () => {
    const [posts, setPosts] = useState({})
    const fetchPost = async () => {
        const results = await axios.get("http://localhost:4000/posts");
        setPosts(results.data)
    }
    const renderPosts = Object.values(posts).map(post => {
        return <div key={post.id} className="card">
            <h1>{post.title}</h1>
            <div className="card-body">
                <CommentCeate postId={post.id}></CommentCeate>
            </div>
        </div>
    })
    useEffect(() => {
        fetchPost();
    }, [])
    return <div className="flex-container">
        {renderPosts}
    </div>
}