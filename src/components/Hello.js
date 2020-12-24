import React from "react"
import { Mark } from "./Mark";
export function Hello(props) {
    return <span>{props.word}<Mark mark=", "/></span>
}

