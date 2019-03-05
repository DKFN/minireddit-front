/* tslint:disbale */
import * as React from "react";
import {RedditClient} from "../utils/RedditClient";

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
        RedditClient.getPost(1)
            .then((x) =>
                x.json()
                    .then((z) => this.setState({post: z})
                    ));
    }

    public render() {
        const post = this.state.post;
        if (post) {
            return (<b>{post.title}</b>)
        } else {
            return (<b> Chargement .... patientez</b>);
        }
    }
}
