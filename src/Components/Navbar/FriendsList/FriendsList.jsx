import styles from "./../Navbar.module.css";

const FriendsList = (props) => {
  const friendsList = props.users.slice(0, 3).map((e) => (
    <div>
      <div className={styles.avatar}>
        <img src={e.avatar} />
      </div>
      {e.name}
    </div>
  ));
  return <div className={styles.friends}>{friendsList}</div>;
};

export default FriendsList;
