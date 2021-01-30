import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Skill from './Skill'

class Skills extends Component{
    render(){
        const { allSkillsJson } = this.props.skills;
        return (
                <section id="skills" className="skills">
                    <h3 className="title">Habilidades</h3>
                    <div className="grid">
                        {allSkillsJson.edges.map(({node: {id, title, description, image}}) => (
                             <Skill
                                    key={id}
                                    title={title}
                                    description={description}
                                    image={image.publicURL}/>
                        ))}
                    </div>
                </section>
         )    
    }
}
export default function() {
    return (
      <StaticQuery query={graphql`
          query {
            allSkillsJson {
                edges {
                  node {
                    title
                    description
                    id
                    image{
                      publicURL
                    }
                  }
                }
            }
          }
        `}
        render={data => <Skills skills={data} />}
      />
    )
  }