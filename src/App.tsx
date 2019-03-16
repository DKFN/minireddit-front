/* tslint:disable */

import * as React from 'react';
import './App.css';

import {Post} from "./component/Post";

class App extends React.Component {


  public render() {
    return (
        <div className="App">
          <Post idPost={1}/>
        </div>
    );
  }
}

export default App;
