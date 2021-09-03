import './Logo.scss';
import { Link } from 'react-router-dom';
function Logo() {
    return (
        <Link className="col-6 d-flex justify-content-start logo-link" exact="true" to="/">
            <div className="px-3 px-md-5 logo-text">JustResults</div>
        </Link>
    );
}

export default Logo;
