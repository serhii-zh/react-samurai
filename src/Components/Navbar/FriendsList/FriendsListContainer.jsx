import { connect } from 'react-redux';
import FriendsList from './FriendsList';

const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer;
