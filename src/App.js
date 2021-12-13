import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.messagesPage} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                updatePostText = {props.updatePostText}
                addPost={props.addPost}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                messagesPage={props.state.messagesPage}
                addMessage={props.addMessage}
                updateMessageText={props.updateMessageText}
              />
            }
          />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
