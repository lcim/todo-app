
import { PropTypes } from "prop-types";

export default function Door({opened, openClose}) {
    console.log(opened)
    // const openStatus = opened ? "hide" : "show";
    return (
        <div className="door-container">
            <div className="left-door">
                <p className="lt-door">Left Door</p>
            </div>
            <div className="right-door">
                <p className="rt-door">Right Door</p>            
                <button className="btn-closeOpen" onClick={() => openClose()}>
                <img src={!opened && "./src/assets/open.png"} alt="Door handle icon" className="door-handle" />Click Here
                </button>
            </div>
        </div>
    )
}
Door.protoTypes = {
    opened: PropTypes.bool,
    openClose: PropTypes.func,
}