
import { PropTypes } from "prop-types";

export default function Door({open}) {

    return (
        <div className="door-container">
            <div className="left-door">
                <p className="lt-door">Left Door</p>
            </div>
            <div className="right-door">
                <p className="rt-door">Right Door</p>            
                <button className="btn-open" onClick={() => open()}>Show schedule
                </button>                 
            </div>
        </div>
    )
}
Door.protoTypes = {
    // opened: PropTypes.bool,
    open: PropTypes.func,
}