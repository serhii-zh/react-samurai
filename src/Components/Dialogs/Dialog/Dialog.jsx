import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const Dialog = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={styles.dialog}>
      <NavLink
        to={path}
        className={(navData) => (navData.isActive ? styles.active : styles.a)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
