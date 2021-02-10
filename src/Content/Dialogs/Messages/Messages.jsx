import s from './messages.module.css'
import React from 'react'


function NewMessage(props) {

    let UpdateNewMessageText = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    let sendMessage = () => {
        props.sendMessage()
    }
    return (
        <div>
            <textarea value={props.newMessageText}
                      onChange={UpdateNewMessageText}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

function Messages(props) {
    return (
        <div className={s.messages}>
            {props.messages.map((el) => <Message message={el.message}/>)}
            <NewMessage sendMessage={props.sendMessage}
                        updateNewMessageText={props.updateNewMessageText}
                        newMessageText={props.newMessageText}/>
        </div>
    )
}

export default Messages