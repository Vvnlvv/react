import {Hello} from "./components/Hello";
import {Name} from "./components/Name";

import React from "react"
//export function App(props) {
 //   return <Welcome name="Ярослав"/>;
  //}

export class App extends React.Component  {
    render() {
        return (
            <div>
                <Hello word="Привет"/>
                <Name name=" Ярослав"/>
            </div>
        );
      }
}
