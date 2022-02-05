import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { useMatch } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(({ data }) => this.props.setUserProfile(data));
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export const withRouter = (Component) => {
  let RouterComponent = (props) => {
    const match = useMatch('/profile/:userId');
    return <Component {...props} match={match} />;
  };
  return RouterComponent;
};

let WithUrlDataProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataProfileComponent
);
