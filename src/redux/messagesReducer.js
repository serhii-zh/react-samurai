const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
  users: [
    {
      name: 'Lindsay',
      id: 1,
      avatar:
        'https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800012/7488111-grass-letter-l.jpg',
    },
    {
      name: 'Nastia',
      id: 2,
      avatar:
        'https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800014/7488152-grass-letter-n.jpg',
    },
    {
      name: 'Yulia',
      id: 3,
      avatar:
        'https://previews.123rf.com/images/chrisroll/chrisroll1008/chrisroll100800025/7488112-grass-letter-y.jpg',
    },
    { name: 'Maryana', id: 4, avatar: '' },
    { name: 'Vova', id: 5, avatar: '' },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you doing?' },
    { id: 3, message: 'Are you there?' },
  ],
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};

export const addMessageTextActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateMessageTextActionCreator = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: messageText,
});

export default messagesReducer;
