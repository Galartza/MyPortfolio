import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import '../Card/card.css'

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">

      </div>
      <div className="card__avatar">
        
      </div>
      <div className="card__title">Joaquin Galarza</div>
      <div className="card__subtitle">Programador Front-end</div>
      <div className="card__wrapper">
        <button className="card__btn">Contactame</button>
      </div>
      <div className="card__redes">
      <BsLinkedin className='red-icon' />
      <BsGithub className='red-icon' />
      </div>
    </div>
  );
};

export default Card;