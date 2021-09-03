import './Navigation.scss';

import { useState, useRef } from 'react';

import Cart from './Cart';
import Hamburger from './Hamburger';
import Menu from './Menu';

function Navigation() {
    const [isActive, setIsActive] = useState(false);
    const hamburgerButton = useRef();
    const closeMenu = (ev) => {
        if (ev.code === 'Escape' && isActive) {
            hamburgerButton.current.focus();
            setIsActive(false);
        }
    };
    return (
        <nav onKeyDown={closeMenu} className="offset-2 col-4 d-flex px-md-5 Navigation">
            <Cart />
            <Hamburger
                hamburgerButton={hamburgerButton}
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <Menu hamburgerButton={hamburgerButton} isActive={isActive} setIsActive={setIsActive} />
        </nav>
    );
}

export default Navigation;
