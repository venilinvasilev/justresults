import './Menu.scss';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../../utils/api/data';
import { userAuthActions } from '../../../../store/auth-slice';

function Menu({ isActive, setIsActive, hamburgerButton }) {
    const userAuth = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await logoutUser();
            dispatch({ type: userAuthActions.AUTH_LOGOUT });
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <nav className={`Menu ${isActive ? `Menu--active` : ''}`}>
            <ul className="Menu__list">
                <li>
                    <Link
                        onClick={() => {
                            setIsActive(false);
                        }}
                        tabIndex={isActive ? 0 : -1}
                        className="Menu__list__link-item"
                        to="/articles"
                    >
                        Articles
                    </Link>
                </li>
                {userAuth.loggedIn && (
                    <li>
                        <Link
                            onClick={() => {
                                setIsActive(false);
                            }}
                            tabIndex={isActive ? 0 : -1}
                            className="Menu__list__link-item"
                            to="/create-article"
                        >
                            Write an Article
                        </Link>
                    </li>
                )}
                <li>
                    <Link
                        onClick={() => {
                            setIsActive(false);
                        }}
                        tabIndex={isActive ? 0 : -1}
                        className="Menu__list__link-item"
                        to="/supplements"
                    >
                        Supplements
                    </Link>
                </li>
                {userAuth.role === 'admin' && (
                    <li>
                        <Link
                            onClick={() => {
                                setIsActive(false);
                            }}
                            tabIndex={isActive ? 0 : -1}
                            className="Menu__list__link-item"
                            to="/add-supplement"
                        >
                            Add Supplement
                        </Link>
                    </li>
                )}
                <li>
                    <Link
                        onClick={() => {
                            setIsActive(false);
                        }}
                        tabIndex={isActive ? 0 : -1}
                        className="Menu__list__link-item"
                        to="/calculator"
                    >
                        Calculator
                    </Link>
                </li>
                {!userAuth.loggedIn ? (
                    <>
                        <li>
                            <Link
                                onClick={() => {
                                    setIsActive(false);
                                }}
                                tabIndex={isActive ? 0 : -1}
                                className="Menu__list__link-item"
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                onKeyDown={(ev) => {
                                    ev.preventDefault();
                                    ev.code === 'Tab' && hamburgerButton.current.focus();
                                }}
                                onClick={() => {
                                    setIsActive(false);
                                }}
                                tabIndex={isActive ? 0 : -1}
                                className="Menu__list__link-item"
                                to="/register"
                            >
                                Register
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link
                                onClick={() => {
                                    setIsActive(false);
                                }}
                                tabIndex={isActive ? 0 : -1}
                                className="Menu__list__link-item"
                                to="/profile"
                            >
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                onKeyDown={(ev) => {
                                    ev.preventDefault();
                                    ev.code === 'Tab' && hamburgerButton.current.focus();
                                }}
                                onClick={(ev) => {
                                    handleLogout(ev);
                                    setIsActive(false);
                                }}
                                tabIndex={isActive ? 0 : -1}
                                className="Menu__list__link-item"
                                to="/"
                            >
                                Logout
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Menu;
