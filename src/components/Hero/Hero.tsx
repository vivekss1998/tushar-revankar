import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/Innovation-amico.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import telegram from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import instagram from '../../assets/instagram.svg'
export function Hero() {
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector('i');
    if (icon) {
      icon.style.transform = 'translateX(5px)';
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector('i');
    if (icon) {
      icon.style.transform = 'translateX(0)';
    }
  };
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Tushar Revankar</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">3+ Years of Experience</p>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button" onMouseOver={handleHover} onMouseOut={handleMouseOut}>
      Contact Me{' '}
      <i
        className="fas fa-arrow-circle-down"
        style={{ marginLeft: '5px',
          transition: 'transform 0.3s ease-in-out',
        }}
      ></i>
    </NavHashLink>          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/tushar-revankar-089734169/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://t.me/TusharRevankar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918605249430&text=Hello+Tushar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/tushar_revankar/tagged/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a></div>
        </ScrollAnimation>

      </div>
     

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
     
    </Container>

  )
}