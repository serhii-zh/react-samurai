import { connect } from 'react-redux';
import {
  setCurrentPage,
  setIsFetching,
  setUsers,
  setUsersTotalCount,
  toggleFollow,
} from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import React from 'react';
import Loader from '../common/Loader/Loader';

class UsersClassContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.setIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
        )
        .then(({ data }) => {
          this.props.setIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setUsersTotalCount(data.totalCount);
        });
    }
  }

  onPageClick = (currentPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
      )
      .then(({ data }) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          usersTotalCount={this.props.usersTotalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
          users={this.props.users}
          toggleFollow={this.props.toggleFollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setUsersTotalCount: (totalCount) =>
//       dispatch(setUsersTotalCountAC(totalCount)),
//     setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching)),
//   };
// };

const mdtp = {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setIsFetching,
};

const UsersContainer = connect(mapStateToProps, mdtp)(UsersClassContainer);

export default UsersContainer;