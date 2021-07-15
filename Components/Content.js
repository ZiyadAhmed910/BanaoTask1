import React from "react";
import "./Content.css";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import join from "../Images/join.png";
import leave from "../Images/leave.png";
import down from "../Images/down.png";
import PostsMobile from "./PostsMobile";
import BarMob from "./BarMob";

function Content() {
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
    <>
      <BarMob />
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
      <div className="Content_main">
        <div className="d-flex">
          <Posts />
        </div>
        <Sidebar groups={show} />
      </div>
      <PostsMobile />
    </>
  );
}

export default Content;
