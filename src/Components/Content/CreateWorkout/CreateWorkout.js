import './CreateWorkout.css';

function CreateWorkout() {
    return (
        <section className='create-section'>
            <form className='create-form'>
                <fieldset>
                    <legend>Create Workout</legend>
                    <p className="field">
                        <label htmlFor='email'>Workout Name</label>
                        <span className="input">
                            <input type="text" name="name" placeholder="Name your workout here..." />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor='password'>Workout Goal</label>
                        <span className="input">
                            <input type="text" name="goal" placeholder="Workout's goal... e.g 'Fat Loss'" />
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
                    <p className="not-a-member">Have an account? Login</p>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateWorkout;