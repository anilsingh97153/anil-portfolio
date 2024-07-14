/* eslint-disable react/prop-types */
import CheckMarkIcon from "../assets/checkmark-dark.svg";

const Skill = ({ skill }) => {
  return (
    <span>
      <img src={CheckMarkIcon} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
};

export default Skill;
