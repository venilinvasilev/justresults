import styles from './Login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../../../utils/firebase/data';
import ModalMessage from '../../Common/ModalMessage';

function Login() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(!email || !password) {
            setErrorMessage({
                heading: 'Login failed!',
                content: 'All fields are required.'
            })
            return;
        }
        loginUser(email, password)
            .then(() => history.push('/'))
            .catch(err => console.log(err.message));
    }
    return (
        <section>
            <form className={styles.loginForm} onSubmit={onSubmitLoginHandler}>
                <fieldset className={styles.loginFieldset}>
                    <legend className={styles.loginLegend}>Login</legend>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='email'>Email</label>
                        <span className={styles.input}>
                            <input type="text" name="email" placeholder="Your email..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='password'>Password</label>
                        <span className={styles.input}>
                            <input type="password" name="password" placeholder="Your password..." />
                        </span>
                    </p>
                    <span className={styles.input}>
                        <input className={styles.submit} type="submit" value="Sign-In" />
                    </span>
                    <p className={styles.notAMember}>Not a member ? Sign-Up <Link to="/register">here</Link> and stop missing out.</p>
                </fieldset>
            </form>
            {errorMessage ? <ModalMessage message={errorMessage} handleGotIt={() => {setErrorMessage('')}} /> : ' '}
            
        </section>
    );
}

export default Login;