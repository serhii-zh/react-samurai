import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
// import state, {
//   addMessage,
//   addPost,
//   subscribe,
//   updateMessageText,
//   updatePostText,
// } from "./redux/state";
import store from "./redux/store";

export const renderEntireTree = (store
  // state
  ) => {
    // debugger;
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App
        state = {store.state}
        addPost = {store.state.profilePage.addPost}
        updatePostText = {store.state.profilePage.updatePostText}
        addMessage = {store.state.messagesPage.addMessage}
        updateMessageText = {store.state.messagesPage.updateMessageText}

          // state={state}
          // addPost={addPost}
          // addMessage={addMessage}
          // updatePostText={updatePostText}
          // updateMessageText={updateMessageText}
        />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store);
// renderEntireTree(state);

store.subscribe(renderEntireTree);
// subscribe(renderEntireTree);
