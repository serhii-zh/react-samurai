import { NavLink } from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="profile"
          className={(navData) => (navData.isActive ? styles.active : styles.a)}
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="dialogs"
          className={(navData) => (navData.isActive ? styles.active : styles.a)}
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="news"
          className={(navData) => (navData.isActive ? styles.active : styles.a)}
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <div className={styles.item}>
        <a>Settings</a>
      </div>

      <FriendsList users={props.state.users} />
    </nav>
  );
};

export default Navbar;
