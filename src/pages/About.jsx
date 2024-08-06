import React from "react";

function About() {
  return (
    <div className="about">
      {/* section */}
      <div className="section">
        <div className="title">About Me</div>
        <p>
        Hi, I am Arnav Kaul. I am pursuing my Bachelor's degree in Electronics and Telecommunication Engineering from VJTI Mumbai. 
        I am always up for exploring new areas of learning and have a keen interest in finance, business development, and psychology.
        </p>
      </div>
      
      <div className="section">
      <div className="title">Skills</div>
        <h1 >Compupter Science</h1> <br />
          <p class="skill-th">
          I love computer programming and enjoy problem-solving using computational approaches. I have a keen interest 
          in exploring different computer programming concepts.
          </p><br />
          <h1>Wev Developer</h1><br />
          <p>I am a web developer with a solid foundation in web design and styling.I am passionate about creating visually 
             appealing and user-friendly websites, and I am committed to developing my abilities in front-end development 
             and I am dedicated to continuously improving my skills and staying up-to-date with the latest web development 
             trends and technologies.
          </p><br />
      </div>
     
    </div>
  );
}

export default About;
