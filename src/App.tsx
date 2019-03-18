/* tslint:disable */

import * as React from 'react';
import './App.css';

import {Post} from "./component/Post";
import {Reply} from "./component/Reply";

class App extends React.Component {


  public render() {
    return (
        <div className="App">
            <section className="hero is-primary" >
            <div className="hero-body">
                    <div className="container">
                        <h1 className="title level-left">
                            MiniReddit !
                        </h1>
                    </div>

                </div>
            </section>
            <Post idPost={1}/>
            <Reply />
      </div>
    );
  }
}

export default App;
