import { connect } from "react-redux";
import {
  addMessageTextActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return(
    {
      addMessage : () => {
        let action = addMessageTextActionCreator();
        dispatch(action);
      } ,
      onTextChange : (messageText) => {
        let action = updateMessageTextActionCreator(messageText);
        dispatch(action);
      }
    }
  )
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
