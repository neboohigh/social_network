import { NavLink } from 'react-router-dom'
import s from './dialogsList.module.css'


function DialogItem(props) {
    return (
        <div className={s.dialogItem}>
            <NavLink to={props.link}> {props.name} </NavLink>
        </div>
    )
}


function DialogsList(props) {
    return (
        <div className={s.dialogsList}>
            {props.dialogs.map((el) => 
                <DialogItem 
                link={`/dialogs/${el.id}`} 
                name={el.name} />
            )}
        </div>
    )
}
export default DialogsList;