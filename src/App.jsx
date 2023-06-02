import { useState , useEffect} from 'react'
// import './style.css'
import ProjectForm from './ProjectForm'
import ProjectTasks from './ProjectTasks'
import Confetti from './Confetti'

function App() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("stored-projects")) || [])

  // localStorage.clear()
  useEffect((() => localStorage.setItem("stored-projects", JSON.stringify(projects))), [projects])

  // This creates a task
  const addProject = (projectName) => {
    return setProjects(prev => [...prev, {project: projectName, completed: false}])
  }

   // This updates a task as completed or not
  const updatedProject = (projectIndex, completionStatus) => {
    setProjects(prev => {
      const projectsCopy = [...prev];
      projectsCopy[projectIndex].completed = completionStatus;
      return projectsCopy
    })
  }

  // This deletes a task
  const cancelProject = (projectIndex) => {
    setProjects(prev => {
      return prev.filter((proj, index) => projectIndex !== index)
    })
  }

  // This edits a task
  const editProject = ( editedProject, projectIndex) => {
    setProjects(prev => {
      const projectsCopy = [...prev];
      projectsCopy[projectIndex].project = editedProject;
      return projectsCopy
      })
  }

  const numOfProjectsCompleted = projects.filter(proj => proj.completed).length; 

  const totalNumOfProjects = projects.length;

  const progress = (numOfProjectsCompleted / totalNumOfProjects) * 100;

  const motivationalMessage = 
    (progress === 0 ? "Add more projects or start pls 🙏, time waits for no one." :
      progress === 50 ? "You're half-way done, forward ever💪⏩" :
        progress === 100 ? "Congratulations! 🦬You did it!" :
          numOfProjectsCompleted > 0 && "Nice! Keep riding higher 🚴‍♀️");
    
  const intro = <p>&quot;What&apos;s your schedule for the day/week/month/year? Add them here and we will help you keep track.&quot;</p>

  return (
    <main>
      <h1 className="title">Simple Scheduler</h1>
      {progress === 100 && <Confetti />}
      <h1 className='task-progress'>{totalNumOfProjects === 0 ? intro : numOfProjectsCompleted + "/" + totalNumOfProjects + ` project${numOfProjectsCompleted < 2 ? "" : "s"} completed`} </h1>
      <h2 className='task-progress-message'>{motivationalMessage}</h2>
      <ProjectForm addProject={addProject}
      />
      <div className="projects-container">
      {projects.map((proj, index) => 
        <ProjectTasks key={index}
          {...proj}
          toggleCompleted={complete => updatedProject(index, complete)}
          canceled={() => cancelProject(index)}
          editProject={(proj) => editProject(proj, index)}
        />
      )}
      </div>
      {/* Instead of passing key, project and completed to ProjectTasks, one can simply pass the projects destructured i.e: {...proj} */}
      
    </main>
  )
}

export default App
