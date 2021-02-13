import s from './content.module.css';

import {Route, Switch} from 'react-router-dom'
import News from './News/News'
import ProfileContainer from './Profile/ProfileContainer'
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

function Content(props) {
    return (
        <div className={s.content}>
            <Switch>
                <Route path='/news' component={News}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/findusers'
                       render={() => <UsersContainer/>}/>
            </Switch>
        </div>
    );
}

export default Content;
