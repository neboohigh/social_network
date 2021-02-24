import React from "react";

import s from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <DialogsList dialogs={props.dialogs}/>
            <Messages sendMessage={props.sendMessage}
                      messages={props.messages}/>
        </div>
    )
}

export default Dialogs