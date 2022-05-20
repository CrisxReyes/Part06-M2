import React from "react";

import  NavBar  from "./components/NavBar/NavBar";

import { Route } from 'react-router-dom';

import { Buscador } from './components/Buscador/Buscador';
import { Users } from './components/Users/Users';
import { UserPosts } from './components/UserPosts/UserPosts';
import { CommentsPost } from './components/CommentsPost/CommentsPost';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/filter/posts" component={Buscador}/>
      <Route path="/" component={Users}/>
      <Route path="/users/:id/posts"  render={({match}) => <UserPosts/>}/>
      <Route path="/user/:userid/post/:id/coments" render={({match}) => <CommentsPost/>}/>
    </React.Fragment>
  )
}

export default App
