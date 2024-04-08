import React from 'react'
import '../Portfolio/portfolio.css'

export const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <h1>Portfolio</h1>

      <div className="proyect">
      <div className="img"></div>
      <div className="textBox">
        <div className="textContent">
          <p className="h1">Aerolinas FlyWay</p>
        </div>
      </div>
    </div>

    <div className="proyect">
      <div className="img"></div>
      <div className="textBox">
        <div className="textContent">
          <p className="h1">TodoList</p>
        </div>
      </div>
    </div>

    <div className="proyect">
      <div className="img"></div>
      <div className="textBox">
        <div className="textContent">
          <p className="h1">Api Rick and Morty</p>
        </div>
      </div>
    </div>

    <div className="proyect">
      <div className="img"></div>
      <div className="textBox">
        <div className="textContent">
          <p className="h1">Clans of Clash</p>
        </div>
      </div>
    </div>
    </div>
    
  )
}
