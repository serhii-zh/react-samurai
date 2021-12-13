let store = {
  state: {
    messagesPage: {
      users: [
        {
          name: "Lindsay",
          id: 1,
          avatar:
            "https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800012/7488111-grass-letter-l.jpg",
        },
        {
          name: "Nastia",
          id: 2,
          avatar:
            "https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800014/7488152-grass-letter-n.jpg",
        },
        {
          name: "Yulia",
          id: 3,
          avatar:
            "https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800025/7488112-grass-letter-y.jpg",
        },
        { name: "Maryana", id: 4, avatar: "" },
        { name: "Vova", id: 5, avatar: "" },
      ],
      messages: [
        { message: "Hi!" },
        { message: "How are you doing?" },
        { message: "Are you there?" },
      ],
      newMessageText: "",
      addMessage() {
        const newMessage = {
          message: store.state.messagesPage.newMessageText,
        };
        debugger;
        store.state.messagesPage.messages.push(newMessage);
        store.state.messagesPage.newMessageText = "";
        store.renderEntireTree(store);
      },
      updateMessageText(newText) {
        store.state.messagesPage.newMessageText = newText;
        store.renderEntireTree(store);
      },
    },
    profilePage: {
      posts: [
        { message: "Here is my first post about Hoverla", likes: 4 },
        { message: "Second post about Hoverla", likes: 7 },
        { message: "Hoverla pt. 3", likes: 10 },
      ],
      newPostText: "",
      addPost() {
        const newPost = {
          message: this.newPostText,
          likes: 0,
        };

        this.posts.push(newPost);
        store.state.profilePage.newPostText = "";
        store.renderEntireTree(store);
      },
      updatePostText(newText) {
        store.state.profilePage.newPostText = newText;
        store.renderEntireTree(store);
      },
    },
  },
  renderEntireTree() {
    console.log("");
  },
  subscribe(observer) {
    this.renderEntireTree = observer;
  },
};

export default store;
