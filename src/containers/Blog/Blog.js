import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import Posts from '../Blog/Posts/Posts'
import NewPosts from './NewPost/NewPost'
import './Blog.css';
import {Route} from 'react-router-dom'
class Blog extends Component {

   
    
    render () {
       
       
        //console.log(this.state.posts)
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                            <a href='/new-posts'>New Post</a>
                            </li>
                            
                        </ul>
                    </nav>
                </header>
{/*               <Route path='/' exact render = {() => <h1>Home</h1>}/>
*/}         
                <Route path ='/' exact component={Posts}/>
                <Route path ='/new-posts' exact component={NewPosts}/>              
              
            </div>
        );
    }
}

export default Blog;