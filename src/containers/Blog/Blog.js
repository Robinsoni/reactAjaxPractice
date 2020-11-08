import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import Posts from '../Blog/Posts/Posts'
import NewPosts from './NewPost/NewPost'
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Fullposts from '../Blog/FullPost/FullPost'
class Blog extends Component {

   
    
    render () {
       
       
        //console.log(this.state.posts)
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
{/*You can also setup the activeStyle and
do active styling*/}      <NavLink to="/posts/" exact activeClassName = "active">Home</NavLink>
                            </li>
                            <li>
                            <NavLink to={{
                                    pathname:'/new-posts',
                                    hash:       '#submit',
                                    search:     '?fast-submit=true'
                            }} exact>New Post</NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                </header>
{/*               <Route path='/' exact render = {() => <h1>Home</h1>}/>
*/}         
            <Switch>
                <Route path ='/new-posts'  component={NewPosts}/>
                <Route path ='/posts'  component={Posts}/>      
                <Redirect from = "/" to = "/posts"/>        
            </Switch>
            </div>
        );
    }
}

export default Blog;