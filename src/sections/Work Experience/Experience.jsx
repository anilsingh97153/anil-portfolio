import styles from "../Work Experience/ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">
        Work
        <br /> Experience
      </h1>
      <div className={styles.experienceContainer}>
        <ExperienceCard
          CompanyName="HCLTech"
          designation="Senior Analyst"
          duration="(Oct 2023 - Mar 2024)"
          work="Worked on a global knowledge management platform, improving data access across 52+ countries. Designed business area sites for better user experience, implemented efficient solutions, developed a customer support chatbot for faster response times, and utilized Qlik Sense for actionable insights."
          skills="HTML, CSS, JavaScript, Bootstrap, Sharepoint, Qlik Sense, Design Thinking"
        />
        <ExperienceCard
          CompanyName="HCLTech"
          designation="Post Graduate Engineer Trainee"
          duration="(Jul 2022 - Sep 2023)"
          work="Designed and developed business area sites for a global knowledge management platform, enhancing data accessibility. Created tailored UIs to improve user experience and efficiency. Used Qlik Sense for dynamic visualizations, providing senior management with actionable insights, leading to better decision-making."
          skills="HTML, CSS, JavaScript, Bootstrap, Sharepoint, Qlik Sense"
        />
      </div>
    </section>
  );
};

export default Experience;
