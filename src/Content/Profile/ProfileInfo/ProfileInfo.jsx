import s from "../profile.module.css";
import {useState, useEffect} from 'react'

const ProfileInfo = (props) => {

    let [isStatusChanging, setIsStatusChanging] = useState(false)
    let [statusMessage, setStatusMessage] = useState(props.statusMessage)

    useEffect(() => {
        setStatusMessage(props.statusMessage)
    }, [props.statusMessage])


    const toggleIsStatusChanging = () => {
        setIsStatusChanging(!isStatusChanging)
        if (isStatusChanging) {
            props.updateStatusMessage(statusMessage)
        }
    }

    const onStatusChanging = (e) => {
        setStatusMessage(e.target.value)
    }
    return (
        <div className={s.profileInfo}>
            <div>
                {!isStatusChanging
                    ? <span className={s.profileStatus}
                            onDoubleClick={toggleIsStatusChanging}>{'status: ' + props.statusMessage}</span>
                    : <input value={statusMessage}
                             autoFocus={true}
                             onBlur={toggleIsStatusChanging}
                             onChange={onStatusChanging}/>
                }
            </div>
            {props.profile.photos.large === null
                ? <div>{'photo'}</div>
                : <img src={props.profile.photos.large}/>}

        </div>
    )
}

export default ProfileInfo