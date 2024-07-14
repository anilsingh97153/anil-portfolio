import styles from "./ProjectsStyles.module.css";
import SortingViz from "../../assets/laptop.png";
import WriteBlog from "../../assets/blog.png";
import GPT from "../../assets/artificial-intelligence.png";
import CodeInk from "../../assets/coding.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={SortingViz} link="https://sorting-visualizer-by-anil.vercel.app/" h3="Sorting Vizualizer" p="Algorithm Visualizer App" />
        <ProjectCard src={WriteBlog} link="https://writeblog-alpha.vercel.app/" h3="WriteBlog" p="Full Stack Blogging App" />
        <ProjectCard src={GPT} link="https://starlit-tulumba-e8195b.netlify.app/" h3="SumZ" p="Article Summarizer App" />
        <ProjectCard src={CodeInk} link="https://advance-tic-tac-toe-by-anil.vercel.app/" h3="CodeInk" p="Coding Editor App" />
      </div>
    </section>
  );
};

export default Projects;
