import React from 'react'
import './Skills.css'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import js from '../../Assets/javascript1.png'
import python from '../../Assets/python.png'
import react from '../../Assets/react.png'
import node from '../../Assets/node.png'
import mongodb from '../../Assets/mongodb.png'

function Skills() {
  return (
    <section className='skills'>
      <div className='icon-head'>
        <h3 >🇸‌🇰‌🇮‌🇱‌🇱‌🇸‌</h3>
        <p>Passionate about crafting web experiences using HTML, CSS, JavaScript, Node.js, Python, and React. Proficient in creating responsive designs and adept at database management with MongoDB.</p>
      </div>
      <div className='all-icon'>
        <img src={html} alt='html' />
        <img src={css} alt='css' />
        <img src={js} alt='js' />
        <img src={node} alt='node' />
        <img src={python} alt='node' />
        <img src={react} alt='node' />
        <img src={mongodb} alt='mongodb' />

      </div>
    </section>
  )
}

export default Skills
