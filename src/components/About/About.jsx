import React from 'react'
import img from '../../assets/img-about.png'
import '../About/about.css'

export const About = () => {
  return (
    <div className='about-container'>
      <h1>About me</h1>

      <div className='container-about'>
        <div className="conteiner-text">
          <p className='text-aboutme'>
            Mi nombre es Joaquín Galarza, soy estudiante de tercer año en la Tecnicatura en Desarrollo de Software.
            Más allá de mis estudios, he canalizado mi pasión por la tecnología dedicándome al aprendizaje autodidacta del desarrollo web Front-end mediante cursos y tutoriales en línea.
            Además, soy un apasionado jugador de basquetbol adaptado.
          </p>
        </div>

        <img className='img-about' src={img} alt="" />
      </div>
    </div>
  )
}