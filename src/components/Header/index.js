import React from "react"
import { Component } from "react";
import { Link }  from "gatsby";
import { Link  as LinkScroll} from "react-scroll";
import PropTypes from "prop-types";

import "./header.css"

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuStatus: false,
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }
    handleToggleMenu(){
        this.setState((state)=>({
            menuStatus: !state.menuStatus
        }));
    }
    render(){
        return (
            <header className="header">
                <div className="wrapper">
                    <nav className="nav">
                        <Link to="/" className="nav__logo">
                            <h1>{this.props.siteAuthor}</h1>
                        </Link>
                        <ul className={`nav__list ${this.state.menuStatus ? 'nav__list--active' : ''}`}>
                            
                            <li className="nav__item">
                            <LinkScroll  to="projects" className="nav__link" spy={true} smooth={true} offset={-90} activeClass="nav__link--active">Proyectos</LinkScroll>
                               {/** <a className="nav__link" href="#projects">Proyectos</a>*/}
                            </li>
                            <li className="nav__item">
                               <LinkScroll to="skills"  className="nav__link" spy={true} smooth={true} offset={-90} activeClass="nav__link--active">Habilidades</LinkScroll>
                            </li>
                            <li className="nav__item">
                               <LinkScroll to="contact"  className="nav__link" spy={true} smooth={true} offset={-130} activeClass="nav__link--active">Contacto</LinkScroll>
                            </li>
                        </ul>
                        <div    className="hamburger" 
                                role="button"
                                tabIndex={0}
                                onClick={this.handleToggleMenu} 
                                onKeyDown={this.handleToggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>                      
                    </nav>
                </div>
            </header>
        )
    }
}
Header.propTypes = {
    siteAuthor: PropTypes.string,
}
Header.defaultProps = {
    siteAuthor: ``,
}