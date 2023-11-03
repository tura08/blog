import { useState, useEffect } from "react";
import "./CreatePost.css";

// text editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase.config";

import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  // const [value, setValue] = useState("");

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
  }, [isAuth, navigate]);

  return (
    <div className="c-post">
      <div className="c-postContainer">
        <h1>Create a post</h1>
        <input
          className="c-postTitle"
          placeholder="Title..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <div className="c-postEditor">
          {/* <textarea
            className="c-postTextarea"
            placeholder="Write a post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
            value={postText}
          /> */}
          <ReactQuill
            className="c-editor"
            theme="snow"
            value={postText}
            onChange={setPostText}
          />
        </div>
        <button className="c-postPublish" onClick={createPost}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
