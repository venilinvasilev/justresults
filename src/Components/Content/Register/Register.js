import styles from './Register.module.css';

import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../../utils/firebase/data';
import ModalMessage from '../../Common/ModalMessage';
function Register() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');
    const onSubmitRegisterHandler = (ev) => {
        ev.preventDefault();
        const username = ev.target.username.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        if(!username || !email || !password) {
            setErrorMessage({
                heading: 'Registration failed!',
                content: 'All fields are required.'
            })
            return;
        }
        const rePassword = ev.target.rePassword.value;
        if(password !== rePassword) {
            setErrorMessage({
                heading: 'Registration failed!',
                content: 'Passwords do not match.'
            })
            return;
        }
        registerUser(username, email, password).then(() => history.push('/')).catch((err) => console.log);    
    }

    return (
        <section>
            <form className={styles.registerForm} onSubmit={onSubmitRegisterHandler}>
                <fieldset className={styles.registerFieldset}>
                    <legend className={styles.registerLegend}>Register</legend>
                    <p className={styles.field}>
                        <label htmlFor='username'>Username</label>
                        <span className={styles.input}>
                            <input type="text" name="username" placeholder="Your username..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor='email'>Email</label>
                        <span className={styles.input}>
                            <input type="text" name="email" placeholder="Your email..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor='password'>Password</label>
                        <span className={styles.input}>
                            <input type="password" name="password" placeholder="Your password..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor='password'>Repeat password</label>
                        <span className={styles.input}>
                            <input type="password" name="rePassword" placeholder="Repeat password..." />
                        </span>
                    </p>
                    <span className={styles.input}>
                        <input className={styles.submit} type="submit" value="Register" />
                    </span>
                    <p className={styles.notAMember}>Have an account? Login <Link to="/login">here</Link></p>
                </fieldset>
            </form>
            {errorMessage ? <ModalMessage message={errorMessage} handleGotIt={() => setErrorMessage('')} /> : ''}
        </section>
    );
}

export default Register;