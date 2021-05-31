import styles from './Register.module.css';

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
        </section>
    );
}

export default Register;