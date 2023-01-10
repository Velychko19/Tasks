import { NavLink } from "react-router-dom";
const NavBar = () => {
    return ( <nav className="nav bd-grid">
                <div>
                    <a className="nav__logo">Dmytro Velychko</a>
                </div>

                 <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/"  className="nav__link">Home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/about"  className="nav__link">About</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/skills"  className="nav__link">Skills</NavLink>
                    </li>
        
                    <li className="nav__item">
                        <NavLink to="/contacts" className="nav__link">Contacts</NavLink>
                    </li>
                    </ul>
                </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
    </nav> );
}
 
export default NavBar;