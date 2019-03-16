/* tslint:disable */

import * as React from "react";

interface IParentProps {
    arrayProps : [];
    marge : number;
}

export class Family extends React.Component<IParentProps, any> {

    public render() {
        const props = this.props.arrayProps;
        console.log(typeof props);
        return (
                    props.map((elmt: any) => {
                        const marge = this.props.marge;
                        const prts = elmt.parents && <Family arrayProps={elmt.parents} marge={marge - 1}/>;
                        const chlds = elmt.replies && <Family arrayProps={elmt.replies} marge={marge + 1}/>;
                        const ret =
                                    <div className="media" style={{marginLeft:marge * 25}}>
                                        <div className="media-left">{elmt.author}</div>
                                        <div className="media-content">{elmt.message}</div>
                                        <div className="media-right"></div>
                                    </div>;
                        return ( <div> {prts} {ret} {chlds} </div>)
                    })
        )
    }
}