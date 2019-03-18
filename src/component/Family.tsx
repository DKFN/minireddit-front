/* tslint:disable */

import * as React from "react";
import {RedditClient} from "../utils/RedditClient";

interface IParentProps {
    arrayProps : [];
    marge : number;
    loadPost : (idPost?: number) => void;
}

export class Family extends React.Component<IParentProps, any> {

    public render() {
        const props = this.props.arrayProps;
        console.log(typeof props);
        return (
                    props.map((elmt: any) => {
                        const marge = this.props.marge;
                        const prts = elmt.parents && <Family arrayProps={elmt.parents} marge={marge - 1} loadPost={this.props.loadPost}/>;
                        const chlds = elmt.replies && <Family arrayProps={elmt.replies} marge={marge + 1} loadPost={this.props.loadPost}/>;
                        const ret =
                                    <div className="media" style={{marginLeft:marge * 25}}>
                                        <div className="media-left tile notification is-info">{elmt.author}</div>
                                        <div className="media-content tile notification" style={{minWidth: 400}}>{elmt.message}</div>
                                        <div className="media-right">
                                            <a className="far fa-thumbs-up button is-success" onClick={() => {RedditClient.postLike(elmt.id); setTimeout(() => this.props.loadPost(), 50)}} style={{marginRight:"10px"}}> {elmt.likes}</a>
                                            <a className="far fa-thumbs-down button is-danger" onClick={() => {RedditClient.postDislike(elmt.id); setTimeout(() => this.props.loadPost(), 50)}} style={{marginRight:"10px"}}> {elmt.dislikes}</a>
                                            <a className="far fa-envelope button is-info" onClick={() => {RedditClient.postDislike(elmt.id); setTimeout(() => this.props.loadPost(elmt.id), 50)}} style={{marginRight:"10px"}}> =></a>
                                        </div>
                                    </div>;
                        return ( <div> {prts} {ret} {chlds} </div>)
                    })
        )
    }
}