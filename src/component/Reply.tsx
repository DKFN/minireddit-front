import * as React from "react";

export const Reply = () => <section className="hero is-dark" >
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Your answer
                        </h1>
                    </div>

                </div>
                <div className="field" style={{marginLeft: "30%", marginRight: "30%", marginBottom: "200px"}}>
                <div className="level" style={{}}>
                <div className="level-left">
                    <b>Name :</b> <br />
                </div>
                    <div className="level-right">
                        <div id="control">
				            <input type="text" className="text primary"/>
                        </div>
                    </div>

                </div>
                <div className="level">
                    <input type="textarea" className="textarea" name="name"/>
                </div>
                <input type="submit" className="button is-primary" name="Submit"/>
                </div>
            </section>;