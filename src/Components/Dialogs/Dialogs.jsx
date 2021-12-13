import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const usersElements = props.messagesPage.users.map((u) => (
    <Dialog name={u.name} id={u.id} />
  ));

  const mesaagesElements = props.messagesPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  const textField = React.createRef();

  const addMessage = () => {
    props.addMessage();
  };

  const onTextChange = () => {
    const messageText = textField.current.value;
    props.updateMessageText(messageText);
  };

  return (
    <div className={styles.dialogsPage}>
      <div className={styles.dialogs}>{usersElements}</div>
      <div className={styles.messages}>
        {mesaagesElements}
        <div className={styles.sendMessage}>
          <textarea
            ref={textField}
            onChange={onTextChange}
            value={props.messagesPage.newMessageText}
          />
          <div>
            <button onClick={addMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
