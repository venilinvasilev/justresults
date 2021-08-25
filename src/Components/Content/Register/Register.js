import styles from './Register.module.css';

import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../../utils/api/data';
import ModalMessage from '../../Common/ModalMessage';
import { userAuthActions } from '../../../store/auth-slice';
import { useDispatch } from 'react-redux';
function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const onSubmitRegisterHandler = async (ev) => {
        ev.preventDefault();
        const data = {
            username: ev.target.username.value,
            firstName: ev.target.firstName.value,
            lastName: ev.target.lastName.value,
            email: ev.target.email.value,
            password: ev.target.password.value,
            passwordConfirm: ev.target.passwordConfirm.value,
            address: ev.target.address.value,
            telephone: ev.target.telephone.value,
            about: ev.target.about.value

        }
        for (const key in data) {
            if (!data[key]) {
                return setErrorMessage({
                    heading: 'Registration failed!',
                    content: 'All fields are required.'
                });
            }
        }
        try {
            const user = await registerUser(data);
            dispatch({ type: userAuthActions.AUTH_LOGIN, payload: user });
            history.push('/');
        } catch (err) {
            setErrorMessage({
                heading: 'Registration failed!',
                content: err.message
            })
        }
    }

    return (
        <section>
            <form className={styles.registerForm} onSubmit={onSubmitRegisterHandler}>
                <fieldset className={styles.registerFieldset}>
                    <legend className={styles.registerLegend}>Register</legend>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='username'>Username</label>
                        <span className={styles.input}>
                            <input type="text" id="username" placeholder="Used for loging in..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='firstName'>First Name</label>
                        <span className={styles.input}>
                            <input type="text" id="firstName" placeholder="Your First Name..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='lastName'>Last Name</label>
                        <span className={styles.input}>
                            <input type="text" id="lastName" placeholder="Your Last Name..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='email'>Email</label>
                        <span className={styles.input}>
                            <input type="text" id="email" placeholder="Your email..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='password'>Password</label>
                        <span className={styles.input}>
                            <input type="password" id="password" placeholder="Your password..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='passwordConfirm'>Confirm password</label>
                        <span className={styles.input}>
                            <input type="password" id="passwordConfirm" placeholder="Confirm password..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='address'>Address</label>
                        <span className={styles.input}>
                            <input type="text" id="address" placeholder="Your Address..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='telephone'>Telephone</label>
                        <span className={styles.input}>
                            <input type="text" id="telephone" placeholder="Your Telephone..." />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='about'>About</label>
                        <span className={styles.input}>
                            <textarea type="text" id="about" placeholder="Describe yourself shortly..." />
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