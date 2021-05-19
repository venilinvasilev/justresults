import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <section className='sign-in-section'>
            <form className='login-form'>
                <fieldset>
                    <legend>Sign-In</legend>
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
                    <span className="input">
                    <input className="submit" type="submit" value="Sign-In"/>
                    </span>
                    <p className="not-a-member">Not a member ? Sign-Up <Link to="/register">here</Link> and stop missing out.</p>
                </fieldset>
            </form>
        </section>
    );
}

export default Login;