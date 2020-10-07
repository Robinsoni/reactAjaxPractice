import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'
class FullPost extends Component {
    state = {
        selectedPost:null
    }

    componentDidUpdate(){
        if(!this.state.selectedPost || (this.state.selectedPost.id !==this.props.postId)){
            axios.get('https://jsonplaceholder.typicode.com/todos/' + this.props.postId)
            .then(Response => {if(Response.data.id){
                this.setState({selectedPost:Response.data})
            }})
        }
    }
    render () {
        let post = <p>Please select a Post!</p>;
        
        if(this.props.postId){
            post = <p style={{textAlign:'center'}} >Loading ...!</p>

        }
        if(this.state.selectedPost){
           /* let selectedPost = [];
            this.props.posts.forEach(element => {
                if(element.id == this.props.postId){
                    selectedPost = element
                }
            });*/ // instead of using existing posts we should see how componet did update will worc
            
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
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