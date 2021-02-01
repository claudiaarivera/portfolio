import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import './hero.css'
import React from 'react';
import { Component } from 'react';
import photo from '../../images/profile.png';
import Image from "../image";
export default class Hero extends Component {
    render(){
        return (
            <section className="hero">
                <div className="wrapper hero__container">
                    <div className="hero__profile">
                        <Image/>
                    </div>                  
                    <div className="hero__description">
                        <h2>Hola <span role="img" aria-label="Waving Hand">👋</span></h2>
                        <p className="hero__text">
                            Soy Claudia, una <span className="hero__bold">desarrolladora frontend</span> ubicada en Lima, Perú. 
                            Amo crear aplicaciones web y agradables experiencias.
                        </p>
                        <a className="btn btn--primary hero__cta" href="mailto:riveramacedoc@gmail.com">
                            <FaTelegramPlane className="btn__icon"/>
                            <span>Contáctame</span>
                        </a>
                        <div className="hero__icons">
                            <a target="_blank"  rel="noreferrer" href="https://github.com/claudiaarivera">
                                <AiFillGithub/>
                            </a>
                            <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/claudiariveramacedo/">
                            <AiFillLinkedin/> 
                            </a>
                            <a target="_blank"  rel="noreferrer" href="https://api.whatsapp.com/send?phone=51966437383">
                                <AiOutlineWhatsApp/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
           
        )
    }
    
}