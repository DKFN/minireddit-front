/* tslint:disbale */
import * as React from "react";

interface IPostProps {
    idPost: number;
}

export class Post extends React.Component<IPostProps, any> {

    public render() {
        return (
            <b>Coucou Ali !</b>
        )
    }
}
