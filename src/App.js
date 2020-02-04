import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PostsListComponent from "./postsList";
import SelectedPostComponent from "./showPost";
import EditPostComponent from "./editPost";

function App() {
  return (
      <Switch>
          <Route path={'/posts/:id/edit'} component={EditPostComponent}/>
          <Route path={'/posts/:id'} component={SelectedPostComponent}/>
          <Route path={'/posts'} component={PostsListComponent}/>
      </Switch>
  );
}

export default App;
