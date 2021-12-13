import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;