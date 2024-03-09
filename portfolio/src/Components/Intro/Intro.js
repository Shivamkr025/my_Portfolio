import React from 'react'
import './Intro.css'
import boy from '../../Assets/my_Image.jpeg'
import gitlab from '../../Assets/gitlab0.png'

function Intro() {
    return (
        <div className='intro-container'>
            <div className='text-Container'>
                <p className="hello">Hello !</p>
                <h5 class="introText">
                    I'm <span className='textName'>Shivam<br /></span> Web developer
                </h5>

                <p className='introPara'>
                    I'm Shivam Kumar, a web developer. This portfolio you're exploring is <br />
                    my creation, made with React. I enjoy crafting visually appealing and <br /> user-friendly websites using HTML, CSS, JavaScript, Node.js, and Python .
                </p>

                <span className='intro-button'>
                    <button className='hireBtn'>
                        <img src={gitlab} alt='gitlab' />
                        <a href='https://gitlab.com/Shivamkr025'>Gitlab</a>
                    </button>
                    <button className='hireBtn'>
                        <a href='https://drive.google.com/file/d/1l_YQfQANRJjYJL8DyGBTqGxkiwdRdCYQ/view?usp=drive_link'>✅Resume</a>
                    </button>

                </span>

            </div>
            <div className='bg-img-div'>
                <img src={boy} alt='boy' className='bg-img' />
            </div>
        </div>
    )
}

export default Intro
