import AboutCodeSection from './fragments/AboutCodeSection'
import faceImage from '../assets/me.jpg'

function About() {
  return (
    <>
      <div>
        <h2>Hi there, my name's Drake!</h2>
        <p>
          I'm a web designer and developer with a passion for creating beautiful and functional
          websites.
        </p>
        <p>
          I've been fascinated by technology and coding from a young age, I started learning how to
          program at the age of 14. Since then, I've been hooked on the endless possibilities of the
          web and have been coding every day for the past 3 years.
        </p>
        <p>
          In my work as a web designer, I specialize in creating responsive, user-friendly websites
          that work seamlessly on all devices. I have a strong background in front-end development
          and enjoy the challenge of bringing a client's vision to life through code.
        </p>
        <p>
          I've had the opportunity to work on a variety of projects, including creating a custom
          full-featured to do list for business and I've worked with different APIs to bring my
          projects to life.
        </p>
        <p>
          I'm constantly striving to learn and improve my skills, and I'm excited to continue
          building my portfolio and making a positive impact through my work as a web designer.
        </p>
      </div>

      <img src={faceImage} alt="My face!" />

      <AboutCodeSection />
    </>
  )
}

export default About
