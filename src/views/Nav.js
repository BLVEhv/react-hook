import '../views/Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todos">List todo</NavLink>
            <NavLink to="/countdown">Countdown</NavLink>

        </div>
    );
};

export default Nav;