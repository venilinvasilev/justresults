import './Register.css';

import { Link, useHistory } from 'react-router-dom';
import { registerUser } from '../../../utils/firebase/data';

function Register() {
    const history = useHistory();
    const onSubmitRegisterHandler = (ev) => {
        ev.preventDefault();
        const username = ev.target.username.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        registerUser(username, email, password).then(() => history.push('/')).catch((err) => console.log);    
    }

    return (
        <section className='sign-in-section'>
            <form onSubmit={onSubmitRegisterHandler}className='login-form'>
                <fieldset>
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor='username'>Username</label>
                        <span className="input">
                            <input type="text" name="username" placeholder="Your username..." />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor='email'>Email</label>
                        <span className="input">
                            <input type="text" name="email" placeholder="Your email..." />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor='password'>Password</label>
                        <span className="input">
                            <input type="password" name="password" placeholder="Your password..." />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor='password'>Repeat password</label>
                        <span className="input">
                            <input type="password" name="rePassword" placeholder="Repeat password..." />
                        </span>
                    </p>
                    <span className="input">
                        <input className="submit" type="submit" value="Register" />
                    </span>
                    <p className="not-a-member">Have an account? Login <Link to="/login">here</Link></p>
                </fieldset>
            </form>
        </section>
    );
}

export default Register;