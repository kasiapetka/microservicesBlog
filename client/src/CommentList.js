import React from 'react';

const CommentList = ({comments}) => {

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