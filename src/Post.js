import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from "@mui/material";
import "./Post.css";
import InputOptions from "./InputOptions";
import { forwardRef } from 'react';


const Post= forwardRef(({ name, description, message, photoUrl }, ref)=> {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
           <InputOptions Icon={ThumbUpIcon} Title="Like" Color="gray"/>
           <InputOptions Icon={ChatIcon} Title="Comment" Color="gray"/>
           <InputOptions Icon={ShareIcon} Title="Share" Color="gray"/>
           <InputOptions Icon={SendIcon} Title="Send" Color="gray"/>
      </div>

    </div>
  );
})

export default Post;
