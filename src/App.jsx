import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import githubLogo from './assets/icons8-github.svg'
import linkedinLogo from './assets/icons8-linkedin.svg'
import pastyourpeak from './assets/PastYourPeak.png'
import database from './assets/database_items.png'
import parentapp from './assets/parent_menu.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Typewriter from './Typewriter'

function App() {
  const [count, setCount] = useState(0)

  const openResume = () => {
    const resumePath = 'Resume.pdf';
    window.open(resumePath, '_blank');
  }

  return (
    <>
      <p className="intro-hello">
        Hi, I'm&nbsp; 
        <span className="intro-name"><Typewriter text="Bryan Dang." delay={100}/></span>
      </p>
      
      <p className="intro-blurb">
        I'm a Computer Science student at Simon Fraser University, RPG enthusiast and fantasy enjoyer. I have an interest in{' '}
        <span style={{ color: '#00ffd1' }}>mobile</span>{' '}
        and{' '}
        <span style={{ color: '#00ffd1' }}>VR/AR development</span>. This site is a visual portfolio of my projects. Welcome!
      </p>
      
      <div className="resume">
        <button onClick={openResume}>
          See My Resume
        </button>
        <div>
          <a href="https://www.linkedin.com/in/bryanjhdang/" target="_blank">
            <img src={linkedinLogo} className="logo-linkedin" alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/itsBryD" target="_blank">
            <img src={githubLogo} className="logo-github" alt="GitHub logo" />
          </a>
        </div>
      </div>
      
      <div className="first-project">
        <div className="project-container">
          <div className="project-item">
            <img src={pastyourpeak} alt="Project Image" className="project-image"/>
          </div>
          <div className="project-item project-details">
            <p className='project-title'>
              Past Your Peak
            </p>
            <p className="project-tech">
              <a href="https://bryd.itch.io/past-your-peak" target="_blank">
                <u>Check It Out</u>
              </a>
              &nbsp;- Unity, C#
            </p>
            <p className="project-description">
              Submission for the Mountain Top Game Jam 2023. This game is a reverse roguelike where you lose powers as you continue through levels, eventually turning into a weak being.
              This game is made in Unity using C#. 
            </p>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-item">
          <img src={parentapp} alt="Project Image" className="project-image"/>
        </div>
        <div className="project-item project-details">
          <p className='project-title'>
            Mobile Parenting App
          </p>
          <p className="project-tech">
            <a href="https://github.com/itsBryD/Parent-App" target="_blank">
              <u>Check It Out</u>
            </a>
            &nbsp;- Android Studio, Java
          </p>
          <p className="project-description">
            An app made using Android Studio and Java. A mobile parenting application with a timer, task
            manager, coin flip, and updatable list of people.
          </p>
        </div>
      </div>


      <div className="project-container">
        <div className="project-item">
          <img src={database} alt="Project Image" className="project-image"/>
        </div>
        <div className="project-item project-details">
          <p className='project-title'>
            Basic Database Simulator
          </p>
          <p className="project-tech">
            <a href="https://github.com/itsBryD/Consumable-Database" target="_blank">
              <u>Check It Out</u>
            </a>
            &nbsp;- Spring Boot, Java, Java Swing
          </p>
          <p className="project-description">
            A basic database simulator that can perform CRUD operations from the backend,
            connected to a front-end UI made with Java Swing that can add, remove, and edit 
            consumable food items.
          </p>
        </div>
      </div>

    </>
  
  )
}

export default App
