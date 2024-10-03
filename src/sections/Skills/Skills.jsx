import Skill from "../../common/Skill";
import styles from "../Skills/SkillsStyles.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <Skill skill="HTML" />
        <Skill skill="CSS" />
        <Skill skill="JavaScript" />
        <Skill skill="NodeJS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <Skill skill="ReactJS" />
        <Skill skill="Tailwind CSS" />
        <Skill skill="Bootstrap" />
        <Skill skill="Figma" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <Skill skill="Redux Toolkit" />
        <Skill skill="Zustand" />
        <Skill skill="Git" />
        <Skill skill="Appwrite" />
      </div>
    </section>
  );
};

export default Skills;
