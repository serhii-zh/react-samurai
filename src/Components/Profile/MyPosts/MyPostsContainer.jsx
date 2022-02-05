import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profileReducer";
// import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    onTextChange: (postText) => {
      let action = updatePostTextActionCreator(postText);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         const addNewPost = () => {
//           let action = addPostActionCreator();
//           store.dispatch(action);
//         };

//         const onTextChange = (postText) => {
//           let action = updatePostTextActionCreator(postText);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             addNewPost={addNewPost}
//             onTextChange={onTextChange}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

export default MyPostsContainer;
