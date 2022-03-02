import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {

  const user= useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you?</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>{" "}
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("ASP.NET")}
        {recentItem("JavaScript")}
      </div>
    </div>
  );
}

export default Sidebar;
