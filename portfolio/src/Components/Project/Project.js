import React from 'react'
import './Project.css'
import news from '../../Assets/news.png'
import book from '../../Assets/bool_labrary.png'
import tic from '../../Assets/tictactoe.png'

function Project() {
  return (
    <section className='project'>
      <div className='project-element'>
        <h3 className='text'>🇵‌🇷‌🇴‌🇯‌🇪‌🇨‌🇹‌</h3>

        <div className='project-container'>
          <div>
            <img src={news} alt='book' />
            <h4> 🚀 By using  HTML, CSS, JavaScript .</h4>
          </div>
          <div className='project-text-container'>
            <h4> 🌍 News Application 🤝</h4>
            <p>The news website project is easy to use. It shows top headlines when you open it, and you can search for news that
              you like. It works well on different devices, and you can easily explore different categories. It uses React to quickly
              update content without slowing down, and it has features to make sure everyone can use it.</p>

            <span>
              <br />
              <h4> 🔑 key features 🪄</h4>
              <p>☆ User-friendly interface with top headlines.</p>
              <p>☆ Dynamic search for personalized news access.</p>
              <p>☆ Responsive design and intuitive category navigation...</p>
              <p>☆ Accessibility features promote inclusivity for all users.</p>
            </span>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-text-container'>
            <h4>Book Libaray :</h4>
            <p>
              Developed a user-friendly book library application using HTML, CSS, JavaScript, Node.js, and MongoDB. The project
              seamlessly connects to the frontend, allowing users to efficiently manage and explore a diverse range of library
              resources.
            </p>
            <span>
              <br />
              <h4> 🔑 key features 🪄</h4>
              <p>☆  I made it simple for managing your books.</p>
              <p>☆  No issues - the front talks to the back seamlessly.</p>
              <p>☆ You can explore and manage a bunch of different books easily.</p>
            </span>

          </div>
          <div>
            <img src={book} alt='book' />
            <h5> 🚀 By using  HTML, CSS, JavaScript, Node.js and MongoDB .</h5>
          </div>

        </div>

        <div className='project-container'>
          <div>
            <img src={tic} alt='book' />
            <h5> 🚀 By using  HTML, CSS, JavaScript .</h5>
          </div>
          <div className='project-text-container'>
            <h4>Blog Application :</h4>
            <p>
              The social media application project is done! People can share posts and like content easily. We used Node.js and
              MongoDB for the backend, and added a few extra tools to make the application more versatile. Our main goal was
              to make a platform that's easy and fun for everyone to use.
            </p>
            <span>
              <br />
              <h4> 🔑 key features 🪄</h4>
              <p>☆ User-friendly interface with top headlines.</p>
              <p>☆ Dynamic search for personalized news access.</p>
              <p>☆ Responsive design and intuitive category navigation...</p>
              <p>☆ Accessibility features promote inclusivity for all users.</p>
            </span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Project
