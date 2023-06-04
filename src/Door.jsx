
import { PropTypes } from "prop-types";

export default function Door({opened, open, close}) {
    // console.log(opened)
    // const openStatus = opened ? true : false;
    return (
        <div className="door-container">
            <div className="left-door">
                <p className="lt-door">Left Door</p>
            </div>
            <div className="right-door">
                <p className="rt-door">Right Door</p>            
                <button className="btn-open" onClick={() => open()}>Show schedule
                </button> 
                { open && <button className="btn-close" onClick={() => close()}>Hide schedule
                </button>}
            </div>
        </div>
    )
}
Door.protoTypes = {
    opened: PropTypes.bool,
    openClose: PropTypes.func,
}