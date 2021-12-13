import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const myPostsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  const textField = React.createRef();

  const addNewPost = () => {
    props.addPost();
  };

  const onTextChange = () => {
    let postText = textField.current.value;
    props.updatePostText(postText);
  };

  return (
    <div className={styles.myPosts}>
      <div>My Posts</div>
      <div>New Post</div>
      <textarea
        ref={textField}
        onChange={onTextChange}
        value={props.newPostText}
      />
      <div>
        <button onClick={addNewPost}>Add Post</button>
      </div>
      <div className={styles.posts}>{myPostsElements}</div>
    </div>
  );
};

export default MyPosts;
