import React from 'react';
import { Component } from 'react';
import './skill.css';

export default class Skills extends Component{
    render(){
        return (
            <article className="skill">
                <div className="skill__image">
                    <img src={this.props.image} alt={this.props.title}/>          
                </div>
                <h5 className="skill__title">{this.props.title}</h5>
                <p className="skill__text">{this.props.description}</p>
            </article>
        )
    }
}
