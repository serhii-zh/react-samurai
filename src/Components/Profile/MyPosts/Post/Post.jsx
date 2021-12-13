import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src="https://previews.123rf.com/images/sergdibrova/sergdibrova1202/sergdibrova120200020/12346491-letter-s-made-of-grass-isolated-on-white-background-.jpg" />
      {props.message}
      <div>likes: {props.likes} </div>
    </div>
  );
};

export default Post;
