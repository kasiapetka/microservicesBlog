import React, {useState} from 'react';
import axios from 'axios';

const PostCreate = () => {

    const [title, setTitle] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="mb-2">Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
                </div>
                <button className="btn btn-info mt-2">Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;