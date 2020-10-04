import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts:[],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {
                console.log(Response)
                const posts = Response.data.splice(0,4)
                const updatedPosts = posts.map(post => (
                    {
                        ...post,
                        author:'Robin'
                    }
                ))
                this.setState({posts:updatedPosts})
            })
    

    }
    render () {
       const post =  this.state.posts.map(post => {
           //console.log(post.title); return
            return <Post key={post.id} title = {post.title} author = {post.author}/>
        })
        console.log(this.state.posts)
        return (
            <div>
                <section className="Posts">
                   {post}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;