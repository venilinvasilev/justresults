import styles from './WorkoutsList.module.css';
import { useEffect, useState } from 'react';
import { getWorkouts } from '../../../utils/firebase/data';
import WorkoutCard from './WorkoutCard';
import Loader from '../../Common/Loader';
function WorkoutsList() {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        getWorkouts()
            .then(data => setWorkouts(data))
            .catch(err => console.log(err));
    }, [workouts]);

    return (workouts && Object.keys(workouts).length ?
        <div className={styles.workoutsWrapper}>
            <h2 className={styles.workoutsPageHeading}>Workouts</h2>
            {Object.keys(workouts).map(workout => <WorkoutCard id={workout} key={workout} {...workouts[workout]} />)}
        </div> :
        <Loader />
    );
}

export default WorkoutsList;