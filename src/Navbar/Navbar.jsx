import s from './navbar.module.css';
import {NavLink} from 'react-router-dom'

function NavItem(props) {
    return (
        <div className={s.navItem}>
            <NavLink
                activeClassName={s.active}
                to={props.link}>
                {props.name}
            </NavLink>
        </div>
    )
}

function Navbar() {
    return (
        <div className={s.navbar}>
            <NavItem link='/news' name='news'/>
            <NavItem link='/dialogs' name='dialogs'/>
            <NavItem link='/profile' name='profile'/>
            <NavItem link='/findusers' name='find users'/>
        </div>
    );
}

export default Navbar;
