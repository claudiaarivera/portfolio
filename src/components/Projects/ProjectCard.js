import React from 'react';
import { Component } from 'react';
import Img from "gatsby-image/withIEPolyfill";
import {AiFillEye} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import Tag from "../Tag";
import "./project-card.css";

export default class ProjectCard extends Component{
    render() {
        return (
            <article className="card">
                <div className="card__top">
                    <Img className="card__image" objectPosition="top" fluid={this.props.imageData} alt="image-exmpal"/>
                </div>
                <div className="card__body">
                    <h4 className="card__title">{this.props.title}</h4>
                    <p className="card__text">{this.props.description}</p>
                    <div className="card__tags">
                        {this.props.technologies.map((tech, index) => <Tag key={index} tech={tech} />)}
                    </div>
                    
                    <div className="card__actions">
                        <a target="_blank" rel="noreferrer" href={this.props.live} className="btn btn--primary card__btn">
                            <AiFillEye className="btn__icon"/> Previsualización
                        </a>
                        <a target="_blank" rel="noreferrer" href={this.props.repository} className="btn btn--outline--primary card__btn">
                            <AiFillGithub className="btn__icon"/> Repositorio
                        </a>
                    </div>
                </div>
            </article>
        )
    }
}