import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
export default function ProjectUpdater ({checked, upDate}) {
    return (
        <div className="project-updater" onClick={upDate}>
        <div>
            {!checked && (
            <FontAwesomeIcon className='fa-icon-sq' icon={faSquare} />
        )}
        </div>
        <div>
            {checked && (
            <FontAwesomeIcon className='fa-icon-sqc' icon={faSquareCheck} />
        )}
        </div>
    </div>)
}

ProjectUpdater.propTypes = {
    checked: PropTypes.bool,
    upDate: PropTypes.func,
}