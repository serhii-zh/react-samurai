import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='https://www.clipartmax.com/png/full/342-3420669_climb-glacier-logo-adventure-mountain-logo.png' />
      <h2>Mountaineers. Climbing together.</h2>
    </header>
  );
};

export default Header;
