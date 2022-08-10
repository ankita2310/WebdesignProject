import React from 'react';
import '../styles/popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
            { props.children }
        </div>
      
    </div>
    </div>
  ) : "";
}

export default Popup
