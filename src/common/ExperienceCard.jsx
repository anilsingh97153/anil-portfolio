/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../sections/Work Experience/ExperienceStyles.module.css" 

const ExperienceCard = ({
  CompanyName,
  designation,
  duration,
  work,
  skills,
}) => {
  return (
    <div className={styles.experienceCard}>
      <h3>
        {designation} at {CompanyName} <br />
        <span style={{fontSize: "18px", fontStyle:"italic"}}>{duration}</span>
      </h3>
      <p><strong>Work: </strong>{work}</p>
      <p><strong>Skills: </strong>{skills}</p>
    </div>
  );
};

export default ExperienceCard;
