import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Route, Link } from 'react-router-dom'
import Fullposts from '../FullPost/FullPost'
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
        //this.setState({selectedPostId:id})
        //console('replace by this',this.props.match.path)
      //  this.props.history.push({pathname: this.props.match.path+'/' + id})
      this.props.history.push({ pathname:'/posts/' + id})
      console.log('see th props',this.props.match.path)
     // console.log('the path',this.props.match.url + '/:id')

    }
    render(){
        const post =  this.state.posts.map(post => {
            //console.log(post.title); return
            {/* <Link to={"/"+ post.id}  > */}
             return (
                 <Post 
                key={post.id}
                title = {post.title} 
                author = {post.author} 
                click = {() => this.showPostHandler(post.id)}
                />)
                {/* </Link> */}
         })
        return(
            <div>
            <section className="Posts">
                {post}
               
            </section>
             <Route path ={this.props.match.url +'/:id'} exact component={Fullposts}/>
             </div>
        )
    }
}
export default Posts;