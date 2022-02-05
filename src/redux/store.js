import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    messagesPage: {
      users: [
        {
          name: "Lindsay",
          id: "1",
          avatar:
            "https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800012/7488111-grass-letter-l.jpg",
        },
        {
          name: "Nastia",
          id: "2",
          avatar:
            "https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800014/7488152-grass-letter-n.jpg",
        },
        {
          name: "Yulia",
          id: "3",
          avatar:
            "https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800025/7488112-grass-letter-y.jpg",
        },
        { name: "Maryana", id: "4", avatar: "" },
        { name: "Vova", id: "5", avatar: "" },
      ],
      messages: [
        { message: "Hi!" },
        { message: "How are you doing?" },
        { message: "Are you there?" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { message: "Here is my first post about Hoverla", likes: 4 },
        { message: "Second post about Hoverla", likes: 7 },
        { message: "Hoverla pt. 3", likes: 10 },
      ],
      newPostText: "",
    },
  },
  _callSubscriber() {
    console.log("");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    messagesReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);
  },
};
export default store;
