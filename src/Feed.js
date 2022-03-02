import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from "./InputOptions";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { useState, useEffect } from "react";
import { db } from "./Firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { serverTimestamp } from "firebase/firestore";
import FlipMove from "react-flip-move";
function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamps", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timeStamps: serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} Title="Photo" Color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            Title="Video"
            Color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} Title="Event" Color="#C0CBCD" />
          <InputOptions
            Icon={CalendarIcon}
            Title="Write Article"
            Color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>

      {/*    <Post name="username" description="This is a test" message="lol" /> */}
    </div>
  );
}

export default Feed;
