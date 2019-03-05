/* tslint:disbale */
import * as React from "react";

interface IPostProps {
    idPost: number;
}

export class Post extends React.Component<IPostProps, void> {

    public render() {
        return (
            <b>Coucou Ali !</b>
        )
    }
}
