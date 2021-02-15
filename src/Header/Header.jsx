import s from './header.module.css';
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <div className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? 'auth' :
                    <NavLink to={'./login'}>login</NavLink>}
            </div>
        </div>
    );
}

export default Header;
