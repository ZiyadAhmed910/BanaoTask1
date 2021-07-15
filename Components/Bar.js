import React from "react";
import "./Bar.css";
import join from "../Images/join.png";
import leave from "../Images/leave.png";
import down from "../Images/down.png";

function Bar() {
  const [show, setShow] = React.useState(false);
  let ele;
  if (show) {
    ele = (
      <div className="leave ml-3 px-3" onClick={() => setShow(false)}>
        <img src={leave} alt="Join" className="mr-2 mb-1"></img>
        Leave Group
      </div>
    );
  }
  return (
    <div className="content-nav ">
      <ul>
        <li>All Posts(32)</li>
        <li>Article</li>
        <li>Event</li>
        <li>Education</li>
        <li>Job</li>
      </ul>
      <div className="write-post ml-auto">
        Write a post
        <img src={down} alt="Join" className="mx-1 pl-3"></img>
      </div>
      {ele}
      <div
        className="join ml-3 px-3 "
        onClick={() => setShow(true)}
        style={{ display: show ? "none" : "block" }}
      >
        <img src={join} alt="Join" className="mr-2 mb-1"></img>
        Join Group
      </div>
    </div>
  );
}

export default Bar;
