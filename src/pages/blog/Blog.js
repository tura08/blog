import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

import "./Blog.css";
import Header from "../../components/header/Header";

const Blog = ({ isAuth }) => {
  const [postsList, setPostsList] = useState([]);
  const postsRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postsRef]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <>
      <Header />
      <div className="blog">
        {postsList.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h2>{post.title}</h2>
                </div>
                <div className="deletePost">
                  {isAuth && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              {/* <div className="postTextContainer">  </div> */}
              {post.postText}
              <h4>@{post.author.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
