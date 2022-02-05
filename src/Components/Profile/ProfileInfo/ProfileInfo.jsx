import Loader from '../../common/Loader/Loader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  return (
    <div className={styles.profileInfo}>
      <div>
        <img src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM' />
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={props.profile.photos.small} />
        </div>
        <div>
          <div>Name: {props.profile.fullName}</div>
          <div>About: {props.profile.aboutMe}</div>
          <div>
            Contacts: {props.profile.contacts.facebook},{' '}
            {props.profile.contacts.website}, {props.profile.contacts.vk},{' '}
            {props.profile.contacts.twitter}{' '}
          </div>
          <div>
            Looking for a job: {props.profile.lookingForAJob ? 'YES' : 'NO'}
          </div>
          <div>Job description: {props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
