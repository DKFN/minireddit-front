/* tslint:disable */

import * as React from 'react';
import './App.css';

import {Post} from "./component/Post";
import {Reply} from "./component/Reply";
import {RedditClient} from "./utils/RedditClient";

class App extends React.Component<any, any> {

    public constructor(p: any, s: any) {
        super(p, s);
        this.state = {
            version: undefined
        };
    }

    public componentDidMount() {
        RedditClient.getVersion().then((res) => {
            res.json().then((body) => {
                this.setState({
                    version: body.version
                });
            });
        });
    }

  public render() {
    return (
        <div className="App">
            <section className="hero is-primary" >
            <div className="hero-body">
                    <div className="container">
                        <h1 className="title level-left">
                            MiniReddit ! Hello :)
                        </h1>
                        <h1 className="subtitle level-left">
                            {this.state.version || "Loading ..."}
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
