import axios from "axios";
import { useState } from "react";

export default ({ postId }) => {
    const [content, setContent] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comment`, {
            content
        });
        setContent("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">New comment</label>
                    <input className="form-control" onChange={e => setContent(e.target.value)}></input>
                </div>
                <button type="submit" style={{ "marginTop": "20px" }} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}