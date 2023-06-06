import { useState } from "react"
import { PropTypes } from "prop-types"

export default function ProjectForm({ addProject }) {
    // Do not confuse project with projects in App.jsx. Here, we're dealing with single project objects unlike in App.jsx where we're dealing with arrays of objects (this single objects precisely)
    const [project, setProject] = useState("")
    
    // To handle form submission and making sure you cannot submit empty project
    const handleSubmit = (e) => {
        e.preventDefault()
        project && addProject(project)
        setProject("")
    }

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <input type="text" autoFocus
                value={project}
                placeholder="Add project/task"
                onChange={(e) => setProject(e.target.value)}
            />
            <button className="input-btn">+</button>
        </form>
    )
}
ProjectForm.propTypes = {
    addProject: PropTypes.func,
}