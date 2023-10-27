import { useState, useEffect } from "react";
import "./CreatePost.css";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase.config";

import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  let navigate = useNavigate();

  const postsRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postsRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Write a post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
            value={postText}
          />
        </div>
        <button onClick={createPost}>Publish</button>
      </div>
    </div>
  );
};

export default CreatePost;
