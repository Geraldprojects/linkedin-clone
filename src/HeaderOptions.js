import "./HeaderOptions.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function HeaderOptions({ avatar, Icon, title, OnClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={OnClick} className="headerOptions">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon">{user.email[0]}</Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
