import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'
class FullPost extends Component {
    state = {
        selectedPost:null
    }

    componentDidMount(){
    
        this.loadData();
        
    }
    loadData(){
        if(!this.state.selectedPost || (this.state.selectedPost.id !== +this.props.match.params.id)){
            axios.get('https://jsonplaceholder.typicode.com/todos/' + this.props.match.params.id)
            .then(Response => {if(Response.data.id){
                this.setState({selectedPost:Response.data})
            }})
        }
    }
    componentDidUpdate(){
        this.loadData();
    }
    render () {
        let post = <p>Please select a Post!</p>;
        
        if(this.props.match.params.id){
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