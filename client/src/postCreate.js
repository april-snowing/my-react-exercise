import { useState } from "react";
import axios from "axios";
export default () => {
    const [title, setTitle] = useState();
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("8888888")
        let result = await axios.post("192.168.3.57:4000/posts", {
            title
        });
        console.log("result======", result)
        setTitle("")
    }
    return (
        <div>
            <h2>Create post</h2>
            <form onSubmit={onSubmit}>
                <label className="form-label">title</label>
                <input className="form-control" onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}