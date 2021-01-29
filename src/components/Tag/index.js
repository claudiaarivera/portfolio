import React from "react";
import { Component } from "react";
import "./tag.css";

export default class Tag extends Component{
    render(){
        return (
            <span className="tag tag--secondary">{this.props.tech}</span>  
        )
    }
}