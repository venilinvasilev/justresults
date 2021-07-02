import styles from './CreateWorkout.module.css';
import ExerciseField from './ExerciseField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserCtx } from '../../../App';
import { addWorkout } from '../../../utils/firebase/data';
function CreateWorkout() {
    const userInfo = useContext(UserCtx);
    console.log(userInfo);
    const history = useHistory();
    const [exercises, setExercises] = useState([1]);
    function addExercise() {
        setExercises((prevState) => prevState.concat(prevState.length + 1));
    }
    function removeExercise() {
        setExercises(prevState => prevState.slice(0, prevState.length -1));
    }
    function onSubmitHandler(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = {
            name: form.name.value,
            goal: form.goal.value,
            description: form.description.value,
            likes: 0,
            exercises: {},
            ownerId: userInfo.uid,
            ownerName: userInfo.username,
            dateAdded: Date.now()
        }
        for (const exercise of exercises) {
            data.exercises[exercise - 1] = {
                name: form[`exercise_${exercise}`].value,
                sets: form[`sets_${exercise}`].value,
                reps: form[`reps_${exercise}`].value,
                rest: form[`rest_${exercise}`].value
            }
        }
        addWorkout(data).then(() => history.push('/workouts')).catch(err => console.log(err.message));
    }
    return (
        <section>
            <form className={styles.createForm} onSubmit={onSubmitHandler}>
                <fieldset className={styles.createFieldset}>
                    <legend className={styles.createLegend}>Create Workout</legend>
                    <div className={styles.twoColumnInputs}>
                        <div className={styles.inputViewTwo}>
                            <label className={styles.inputLabel} htmlFor='name'>Name</label>
                            <div className={styles.divInput}>
                                <input type="text" name="name" placeholder="Give your workout a name..." />
                            </div>
                        </div>
                        <div className={styles.inputViewTwo}>
                            <label htmlFor="goal" className={styles.inputLabel}>Goal</label>
                            <div className={styles.divInput}>
                                <input type="text" name="goal" id="goal" placeholder="Workout's goal... e.g 'Strength Gain'" />
                            </div>
                        </div>
                    </div>
                    <p className={styles.field}>
                        <label className={styles.inputLabel} htmlFor='description'>Description</label>
                        <span className={styles.input}>
                            <textarea name="description" id="description"/>
                        </span>
                    </p>
                    {exercises.map(id => {
                        return <ExerciseField key={id} id={id} /> }
                    )}
                    <div className={styles.twoColumnInputs}>
                        <div className={styles.inputViewTwo}>
                            <button type="button" className={styles.submit} onClick={addExercise}>Add Exercise</button>
                        </div>
                        <div className={styles.inputViewTwo}>
                            {exercises.length > 1 ? <button type="button" className={styles.submit} onClick={removeExercise}>Remove Exercise</button> : ''}
                        </div>
                    </div>
                    <span className={styles.input}>
                        <input className={styles.submit} type="submit" value="Create Workout" />
                    </span>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateWorkout;