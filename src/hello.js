//export function Welcome(props) {
 //   return <h1>Привет, {props.name}</h1>;
 // }
 import React from "react"

  export class Hello extends React.Component  {
    render() {
        return (
            <div>Привет, {this.props.name}</div>
        );
      }
}