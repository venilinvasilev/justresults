import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../utils/firebase';
function Login() {
    const history = useHistory();
    const onSubmitLoginHandler = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/');

        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <section className='sign-in-section'>
            <form onSubmit={onSubmitLoginHandler} className='login-form'>
                <fieldset>
                    <legend>Login</legend>
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