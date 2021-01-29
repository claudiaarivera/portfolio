import React from "react";
import {Component} from "react";
import { graphql, StaticQuery } from 'gatsby';
import ProjectCard from "./ProjectCard";

class ProjectCardList extends Component{
  render(){
    const { allProjectsJson } = this.props.projects;
    return(
        <div className="grid grid--work">
            {allProjectsJson.edges.map(({node :{id, title, description, technologies,live, repository, image}}) => 
                (<ProjectCard 
                      key={id} 
                      title={title}
                      description={description}
                      technologies={technologies}
                      live={live}
                      repository={repository}
                      imageData={image.childImageSharp.fluid}
                      />))}
        </div>
    )
  }
}
export default function() {
  return (
    <StaticQuery query={graphql`
        query {
          allProjectsJson {
            edges {
              node {
                title
                description
                technologies
                live
                repository
                id
                image {
                  childImageSharp {
                    fluid(maxWidth: 560) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <ProjectCardList projects={data} />}
    />
  )
}