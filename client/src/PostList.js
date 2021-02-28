import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');
        setPosts(res.data);
    }
    
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return <div key={post.id} className="card bg-light bg-gradient" style={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body d-flex flex-column justify-content-between ">
                <h3>{post.title}</h3>
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id}/>
            </div>
        </div>
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between border border-info p-3">
        {renderedPosts}
    </div>;

};

export default PostList;