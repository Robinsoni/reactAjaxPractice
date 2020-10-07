import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.postId){
            let selectedPost = [];
            this.props.posts.forEach(element => {
                if(element.id == this.props.postId){
                    selectedPost = element
                }
            });
            
            post = (
                <div className="FullPost">
                    <h1>{selectedPost.title}</h1>
                    <p>{selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;