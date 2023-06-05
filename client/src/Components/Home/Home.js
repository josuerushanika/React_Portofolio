import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => (
  <div className="container-fluid home">
    <div className="container home-content">
      <h1>Hi I&apos;m Josue Rushanika a </h1>
      <h3>
        <Typewriter
          options={{
            strings:
            ['Full Stack Software Developer',
              'Web Developer',
              'MERN Stack Developer',
              'Cybersecurity Specialist',
              'Network Engineer'],
            autoStart: true,
            loop: true,
            delay: 5,
          }}
        />
      </h3>

      <div className="button-for-action">
        <div className="hire-me-button">
          Hire me
        </div>

        <div className="get-resume-button">
          <a href="https://drive.google.com/file/d/1pzDesEZLKv7i_BKyjHV_7V_58yK0UZWo/view?usp=sharing" download="Josue_Cv">
            Get Resume
          </a>

        </div>

      </div>

    </div>
  </div>
);

export default Home;
