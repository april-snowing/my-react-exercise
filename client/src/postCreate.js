import { useState } from "react";
import axios from "axios";
export default () => {
    const [title, setTitle] = useState();
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/posts", {
            title
        });
        setTitle("")
    }
    return (
        <div>
            <h2>Create post</h2>
            <form onSubmit={onSubmit}>
                <label className="form-label">title</label>
                <input value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" style={{ "marginTop": "10px" }} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}