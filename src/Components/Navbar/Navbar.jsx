import { NavLink } from "react-router-dom";
import FriendsListContainer from "./FriendsList/FriendsListContainer";
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
          to="users"
          className={(navData) => (navData.isActive ? styles.active : styles.a)}
        >
          Users
        </NavLink>
      </div>
      <FriendsListContainer />
    </nav>
  );
};

export default Navbar;
