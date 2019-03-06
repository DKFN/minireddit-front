/* tslint:disable */

import * as React from "react";
import {RedditClient} from "../utils/RedditClient";
import {Parent} from "./Parent";


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
    }

    public componentDidMount() {
        RedditClient.getPost(this.props.idPost)
            .then((x) =>
                x.json()
                    .then((z) => this.setState({post: z})
                    ));
    }

    public render() {
        const post = this.state.post;
        console.log(post);
        if (post) {
            const prts = <Parent arrayProps={post.parents}/>
            return (<div>{prts}<b>{post.message}</b></div>)
        } else {
            return (<b> Chargement .... patientez</b>);
        }
    }
}
