import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
// import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ProjectUpdater from "./ProjectUpdater"
import { useState } from 'react';

export default function ProjectTasks ({project, completed, toggleCompleted, canceled, editProject}) {
    const [editMode, setEditMode] = useState(false);
    return (
        <div className={ 'project-' + (completed ? "completed" : "not-completed")}>
            {!editMode && (
                <div className='noedit-form-mode' onClick={() => setEditMode(prev => !prev)}>
                    <span className='project-title'>{project}</span>
                </div>
            )}
            {editMode && (
                <form className='edit-form-mode' onSubmit={(e) => {e.preventDefault(); setEditMode( prev => !prev) }}>
                    <input type="text"
                        value={project}
                        onChange={(e) => editProject(e.target.value)}
                    />
                </form>
            )}
            <div className='modification-icons'>
            <ProjectUpdater checked={completed} upDate={ () => toggleCompleted(!completed)} />
            <div className='fa-icon-tr' onClick={canceled}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
             </div>           
        </div>)
}

// <ProjectUpdater checked={completed} upDate={ () => toggleCompleted(!completed)} />
// <FontAwesomeIcon onClick={onToggle(!completed)} className='fa-icon-sq' icon={faSquareCheck} /> <FontAwesomeIcon onClick={onToggle(!completed)} className='fa-icon-sq' icon={faSquare} />

// <FontAwesomeIcon icon="fa-regular fa-square-check" />
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
// <FontAwesomeIcon icon="fa-regular fa-square" />
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
// <FontAwesomeIcon icon="fa-solid fa-trash-arrow-up" />
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"/></svg>
ProjectTasks.propTypes = {
    project: PropTypes.string,
    completed: PropTypes.bool,
    toggleCompleted: PropTypes.func,
    canceled: PropTypes.func,
    editProject: PropTypes.func,
}