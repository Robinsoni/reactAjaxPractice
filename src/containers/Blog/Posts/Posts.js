import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component{
    state = {
        posts:[],
        selectedPostId:null,
        error:null,
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

    showPostHandler = (id) => {
        this.setState({selectedPostId:id})
    }
    render(){
        const post =  this.state.posts.map(post => {
            //console.log(post.title); return
             return <Post key={post.id} title = {post.title} author = {post.author} click = {() => this.showPostHandler(post.id)}/>
         })
        return(
            <section className="Posts">
                {post}
            </section>
        )
    }
}
export default Posts;