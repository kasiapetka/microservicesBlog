import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CommentList = ({postId}) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    };

    useEffect(() => {
        fetchComments();
    }, []);


    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return <div style={{maxHeight:'115px', overflowY: 'auto'}}>
        { comments.length === 0 ? <h6>No comments yet.</h6> : <h6>{comments.length} {comments.length === 1 ? 'comment' : 'comments'}</h6> }
        <ul>
            {renderedComments}
        </ul>
    </div>
};

export default CommentList;