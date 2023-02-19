import React from 'react'
import './styles/portfolio.css'

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='heading'>Latest <span>Project</span></h2>
      <div className="portfolio-container">
        <div className="portfolio box">
          <img src="/src/assets/images/portfolio/dummy.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}
