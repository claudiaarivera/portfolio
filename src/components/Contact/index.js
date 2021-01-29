import React from "react";
import {Component} from "react";
import "./contact.css";
import { FaTelegramPlane } from 'react-icons/fa';

export default class Contact extends Component{
    render(){
        return (
            <section id="contact" className="contact">
               <h3 className="title">Contacto</h3>
               <p className="contact__text">¿Te interesa trabajar conmigo? Envíame un mensaje y conversemos, normalmente estoy disponible cualquier día de la semana </p>
               <a className="btn btn--secondary contact__btn" href="mailto:riveramacedoc@gmail.com">
                   <FaTelegramPlane /> Escríbeme
               </a>
            </section>
        )
    } 
}