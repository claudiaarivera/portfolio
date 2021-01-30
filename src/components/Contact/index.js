import React from "react";
import {Component} from "react";
import "./contact.css";
import { FaTelegramPlane } from 'react-icons/fa';

export default class Contact extends Component{
    render(){
        return (
            <section id="contact" className="contact">
               <h3 className="title">Contacto</h3>
               <p className="contact__text">¿Creamos algo asombroso juntos? Envíame un mensaje al correo electrónico o al whatsapp.Normalmente estoy disponible cualquier día de la semana. </p>
               <a className="btn btn--secondary contact__btn" href="mailto:riveramacedoc@gmail.com">
                   <FaTelegramPlane className="btn__icon"/>
                   <span>Escríbeme </span>
               </a>
            </section>
        )
    } 
}