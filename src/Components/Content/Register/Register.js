import './Register.css';

import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../utils/firebase';

function Register() {
    const history = useHistory();
    const onSubmitRegisterHandler = async (ev) => {
        ev.preventDefault();
        const email = ev.target.email.value;
        const password = ev.target.email.value;
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            history.push('/')
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className='sign-in-section'>
            <form onSubmit={onSubmitRegisterHandler}className='login-form'>
                <fieldset>
                    <legend>Register</legend>
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