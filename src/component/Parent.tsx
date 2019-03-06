/* tslint:disable */

import * as React from "react";

interface IParentProps {
    arrayProps : [];
}

export class Parent extends React.Component<IParentProps, any> {

    public render() {
        const props = this.props.arrayProps;

        return (
            <div>
                {
                    props.map((elmt: any) => <div><b>{elmt.message}</b><br/></div>)

                }
            </div>
        )
    }
}