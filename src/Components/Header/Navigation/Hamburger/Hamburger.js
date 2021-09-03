import './Hamburger.scss';

function Hamburger({ isActive, setIsActive, hamburgerButton }) {
    const toggleMenu = () => {
        setIsActive((state) => !state);
    };
    return (
        <div className="col-6 d-flex justify-content-end px-3 Hamburger">
            <button
                ref={hamburgerButton}
                aria-label="main navigation"
                className={`hamburger hamburger--3dx ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={toggleMenu}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    );
}

export default Hamburger;
