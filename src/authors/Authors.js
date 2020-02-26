import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay, AuthorTableRows } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = { //This holds states? 
            authors: [
                {
                    name: "Eric Evans"
                },
                {
                    name: "Nicole Forsgren"
                },
                {
                    name: "Lori Jameson"
                },
                {
                    name: "Jacob Delacy"
                },
                {
                    name: "Red Foreman"
                }
            ]
        };
    }

    AuthorTableRows = () => // Code Adapted from "Todo List" Lab 2
      this.state.authors.map(item =>(
        <tr key={item.name}>
            <td>{item.name}</td>
        </tr>
      ));

    render() {
        return (
        <div className="Authors">
            <div className="lander">
                <AuthorDisplay authors={this.state.authors} /> 

                {// More code taken from "Todo List" Lab 2}
                    }   
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            
                        </tr>
                     </thead>
                    <tbody>{this.AuthorTableRows()}</tbody>
                </table>

            </div>
        </div>
    );
    }
}
