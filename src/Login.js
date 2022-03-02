import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { login } from "./features/userSlice";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch= useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth=>{
      dispatch(login({
        email:userAuth.user.email,
        uid: userAuth.user.uid,
        displayName:userAuth.user.name,
        photoURL:userAuth.user.photoURL
      }))
    }).catch(error =>alert(error.message))
  };
  const register = () => {
    if (!name) {
      return alert("Please enter full name.");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      }).then(()=>{
          dispatch(login({
              email:userAuth.user.email,
              uid: userAuth.user.uid,
              displayName:name,
              photoURL:profilePic

          }))
      }).catch(error => alert(error.message));
    });
  };

  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzX3asPWv1rpDFseg5Q7_4i_N8RLydyZPQcW9SfaiUwkqJEhFJOGw9m90zvXvrvBy7Bq4&usqp=CAU"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering )"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
