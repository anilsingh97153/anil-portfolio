import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import xLight from "../../assets/twitter-light.svg";
import xDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Anil_Singh_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const xIcon = theme === "light" ? xLight : xDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      {/* profile and color theme image container */}
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Anil Singh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anil
          <br />
          Singh
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/anilsingh97153/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a
            href="https://github.com/anilsingh97153?tab=repositories"
            target="_blank"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://x.com/Anilsinghsuyal" target="_blank">
            <img src={xIcon} alt="X icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
