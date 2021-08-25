import styles from './Login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAuthActions } from '../../../store/auth-slice';
import { loginUser } from '../../../utils/api/data';
import ModalMessage from '../../Common/ModalMessage';

function Login() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const onSubmitLoginHandler = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if(!username || !password) {
            setErrorMessage({
                heading: 'Login failed!',
                content: 'All fields are required.'
            })
            return;
        }
        try {
            const user = await loginUser({ username, password });
            dispatch({ type: userAuthActions.AUTH_LOGIN, payload: user });
            history.push('/');
        } catch (err) {
            setErrorMessage({
                heading: 'Login failed!',
                content: err.message
            });
        }
    }
    return (
        <section>
            <form className={styles.loginForm} onSubmit={onSubmitLoginHandler}>
                <fieldset className={styles.loginFieldset}>
                    <legend className={styles.loginLegend}>Login</legend>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='username'>Username or Email</label>
                        <span className={styles.input}>
                            <input type="text" name="username" placeholder="Type your username or email here..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='password'>Password</label>
                        <span className={styles.input}>
                            <input type="password" name="password" placeholder="Your password..." />
                        </span>
                    </p>
                    <span className={styles.input}>
                        <input className={styles.submit} type="submit" value="Login" />
                    </span>
                    <p className={styles.notAMember}>Not a member ? Register <Link to="/register">here</Link> and stop missing out.</p>
                </fieldset>
            </form>
            {errorMessage ? <ModalMessage message={errorMessage} handleGotIt={() => {setErrorMessage('')}} /> : ' '}
            
        </section>
    );
}

export default Login;