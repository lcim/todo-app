import { useState , useEffect} from 'react'
// import './style.css'
import ProjectForm from './ProjectForm'
import ProjectTasks from './ProjectTasks'
import Confetti from './Confetti'
import Footer from './Footer'
import Door from "./Door"
import $ from "jquery";

/* 
This App is a React ToDo App with five components: 
ProjectForm, ProjectTasks (which has a sub-component: ProjectUpdater), Door, Confetti, and Footer. 

The ProjectForm handles user inputs(tasks/projects/schedule) - It receives props from the parent App and adds the tasks.
The Door component receives no property but used to render the "door" sliding door that shields the App from accidental modification/deletion.
Confetti is used to render ReactConfetti only.
Footer renders my social icons that links to my social handles
ProjectTasks receives the tasks/projects and used alongside other helper props from App to handle both task editing and re-adding tasks. The child, ProjectUpdater handles the completion status of projects/tasks - checked or not.
*/

function App() {
// get projects from localStorage or return an empty array
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("stored-projects")) || [])

// Door closure status - opened or not
  const [opened, setOpened] = useState(false)
  
  // Store project in the localStorage once there is a new task/project added or edited.
  useEffect((() => localStorage.setItem("stored-projects", JSON.stringify(projects))), [projects])

  // This function creates a task - passed down to ProjectForm
  const addProject = (projectName) => {
    return setProjects(prev => [...prev, {project: projectName, completed: false}])
  }

   // This updates a task as completed or not. It's passed down to ProjectTasks which passes it down to it's child to handle completion status
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

  // This edits a task. It's handed down to ProjectTasks for editing
  const editProject = ( editedProject, projectIndex) => {
    setProjects(prev => {
      const projectsCopy = [...prev];
      projectsCopy[projectIndex].project = editedProject;
      return projectsCopy
      })
  }

  // Function to open the doors: passed down to the Door component
  const handleOpened = () => {    
    setOpened(true)
    { !opened && $(".right-door").addClass("right-open") }
    { !opened && $(".left-door").addClass("left-open") }
    $(".btn-close").show();
    $(".btn-open").hide();
    $(".rt-door").hide();
    setTimeout(function () {
    $(".right-door").css({width:0});
    }, 4000);
  }

  // Function to close the doors: passed down to the Door component
  const handleClosed = () => {
    { opened && $(".right-door").addClass("right-closed") } 
    { opened && $(".left-door").addClass("left-closed") }
    $(".btn-open").show();
    $(".right-door").css({width: "50vw"});
    setOpened(false);
    setTimeout(function () {
      window.location.reload();
    }, 4000);
  }

  // Some constants for normal & conditional rendering
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
    <div className="container">
      <Door opened={opened} open={() => handleOpened()} close={() => handleClosed()} />
      
    <main>
      <h1 className="title">Simple ToDo-App</h1>
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
      { <button className="btn-close" onClick={() => handleClosed()}>Hide schedule
      </button>}      
      </main>
      <Footer />
    </div>
  )
}
export default App
