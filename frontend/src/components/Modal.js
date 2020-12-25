import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import history from "../history";

function Modal(props, { fetchSingleStream, match }) {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => props.onDismiss()}
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header"> {props.title}</div>
        <div className="content">
          {props.description} <br />
          {/* {props.stream["title"]} */}
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
