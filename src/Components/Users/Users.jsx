import styles from './Users.module.css';
import defaultAvatar from './../../assets/images/defaultAvatar.png';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Fragment>
      <div>
        {pages.slice(0, 10).map((p) => (
          <span key={p}
            className={props.currentPage === p ? styles.selectedPage : undefined}
            onClick={() => {
              props.onPageClick(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id} className={styles.userItem}>
            <NavLink to={'/profile/' + u.id}>
              <img
                className={styles.avatar}
                src={u.photos.small != null ? u.photos.small : defaultAvatar}
                alt='avatar'
              />
            </NavLink>
            <button
              onClick={() => {
                props.toggleFollow(u.id);
              }}
            >
              {u.followed ? 'Unfollow' : 'Follow'}
            </button>
            <div>Name: {u.name} </div>
            <div>Country: {'u.location.country'} </div>
            <div>City: {'u.location.city'} </div>
            <div>Status: {u.status} </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Users;
