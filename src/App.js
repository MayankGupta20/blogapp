import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import Home from './components/home';
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Post from "./components/posts";
import PostDetail from "./components/postsDetail";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
     
        <Switch>
        
        <Route path="/" exact component={Home}></Route>
        <Route path="/posts/:userID" exact component={Post}></Route>
        <Route path="/posts/:userID/:postID" exact component={PostDetail}></Route>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}



export default App;
