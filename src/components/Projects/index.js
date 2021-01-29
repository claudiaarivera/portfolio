import React from "react";
import {Component} from "react";
import ProjectCardList from "./ProjectCardList";


export default class Projects extends Component{
  render(){
    return(
        <section id="projects" className="work">
            <h3 className="title">Proyectos</h3>
            <ProjectCardList />
        </section>
    )
  }
}
