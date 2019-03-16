/* tslint:disable */

import * as React from "react";
import {RedditClient} from "../utils/RedditClient";
import {Family} from "./Family";


interface IPostProps {
    idPost: number;
}

interface IPostState {
    post?: any; // TODO : Define post interface
}

export class Post extends React.Component<IPostProps, IPostState> {

    public constructor(props: IPostProps, state: IPostState) {
        super(props, state);
        this.state = {
            post: undefined
        };
        this.loadPost = this.loadPost.bind(this);
    }

    public loadPost(){
        RedditClient.getPost(this.props.idPost)
            .then((x) =>
//                if (x.status >= 400)
                // Diplay
                x.json()
                    .then((z) => this.setState({post: z})
                    ));
    }

    public componentDidMount() {
       this.loadPost();
    }

    public render() {
        const post = this.state.post;
        console.log(post);
        if (post) {
            const length = post.parents && post.parents.length || 0;
            console.log(length);
            const prts = post.parents && <Family arrayProps={post.parents} marge={length - 1} loadPost={this.loadPost}/>;
            const chlds = post.replies && <Family arrayProps={post.replies} marge={length + 1} loadPost={this.loadPost}/>;
            return (
                <div style={{width:"500px", marginLeft:"15%"}}>
                    {prts}
                    <b>
                        <div className="media" style={{marginLeft:length * 25}}>
                            <div className="media-left">{post.author}</div>
                            <div className="media-content">{post.message}</div>
                            <div className="media-right">
                                <a className="far fa-thumbs-up" onClick={() => {RedditClient.postLike(post.id); this.loadPost()}} style={{marginRight:"10px"}}>{post.likes}</a>
                                <a className="far fa-thumbs-down" onClick={() => {RedditClient.postDislike(post.id); this.loadPost()}} style={{marginRight:"10px"}}>{post.dislikes}</a>
                            </div>
                        </div>
                    </b>
                    {chlds}
                </div>)
        } else {
            return (<b> Chargement .... patientez</b>);
        }
    }
}
