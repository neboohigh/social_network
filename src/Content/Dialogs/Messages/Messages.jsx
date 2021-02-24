import s from './messages.module.css'
import React from 'react'
import {Field, reduxForm} from "redux-form";


let NewMessage = (props) => {

    // let UpdateNewMessageText = (e) => {
    //     let text = e.target.value
    //     props.updateNewMessageText(text)
    // }
    //
    // let sendMessage = () => {
    //     props.sendMessage()
    // }
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}
                   name={'newMessageText'}/>
            <button>Send</button>
        </form>
    )
}
NewMessage = reduxForm({form:'newMessage'})(NewMessage)


function Message(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

function Messages(props) {

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageText)
    }

    return (
        <div className={s.messages}>
            {props.messages.map((el) => <Message message={el.message}/>)}

            <NewMessage onSubmit={onSubmit}/>
        </div>
    )
}

export default Messages