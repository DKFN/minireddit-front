/* tslint:disable */

import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {RedditClient} from "./utils/RedditClient";
import {Post} from "./component/Post";

class App extends React.Component {
    public componentDidMount() {
        RedditClient.getPost(1)
            .then((x) => x.json().then((z) => console.log(z)));
    }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <Post idPost={1}/>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
