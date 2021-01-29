import { Component } from "react";
import React from "react";
import { Link } from "gatsby";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import  "./footer.css";

export default class Footer extends Component{
    render(){
        return (
            <footer className="footer">
              <div className="wrapper">
                <p className="footer__copy">
                    <Link className="footer__owner" to="/">{this.props.siteAuthor}</Link>&nbsp;<span role="img" aria-label="Smiling Face with Sunglasses">😎</span> - Desarrollado con&nbsp; 
                    <a className="footer__tech" target="_blank" rel="noreferrer" href="https://reactjs.org/">reactjs</a> y <a className="footer__tech" target="_blank" rel="noreferrer" href="https://gatsbyjs.org/">gatsbyjs</a>
                </p>
                <div className="footer__social">
                    <a target="_blank" aria-label="Ir a mi github" rel="noreferrer" href="https://github.com/claudiaarivera"><AiFillGithub className="footer__icon" /></a>
                    <a target="_blank" aria-label="Ir a mi perfil de linkedin" rel="noreferrer" href="https://www.linkedin.com/in/claudiariveramacedo/"><AiFillLinkedin className="footer__icon" /></a>
                    <a target="_blank" aria-label="Enviar un mensaje a whatsapp" rel="noreferrer" href="https://api.whatsapp.com/send?phone=51966437383"><AiOutlineWhatsApp className="footer__icon" /></a>
                </div>
              </div>
            </footer>
        )
    } 
}