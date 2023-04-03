import '../views/Nav.scss';

const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/todos">List todo</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
};

export default Nav;