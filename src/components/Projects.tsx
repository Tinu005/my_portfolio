import {projects} from '../constants';
import styles, {layout} from '../style';

const ProjectCard = ({ icon, title, content, index}) => (

  <div className={`flex flex-row p-6 rounded-[20px] ${index !== projects.length-1 ? "mb-6" : "mb-0"} project-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimblue`}>
      <img src={icon} alt="icon" className="w-[100%] h-[100%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className={`${layout.section} px-6`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Personal Projects
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          In my few short years of coding I have strived to broaden my horizens, as such I've dipped my toes in various coding languages, frameworks, libraries and API's. Here are some of my personal projects that I've worked on.
        </p>
      </div>
      <div className={`${layout.sectionImg}
      flex-col`}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project}/>

        ))}

      </div>
    </section>
  )
}

export default Projects