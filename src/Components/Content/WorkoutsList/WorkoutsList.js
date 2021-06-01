import styles from './WorkoutsList.module.css';
import { useEffect, useState } from 'react';
import { getWorkouts } from '../../../utils/firebase/data';
import WorkoutCard from './WorkoutCard';

function WorkoutsList() {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        getWorkouts()
            .then(data => setWorkouts(data))
            .catch(err => console.log(err));
    }, [workouts]);

    return (
        <div className={styles.workoutsWrapper}>
            <h2 className={styles.workoutsPageHeading}>Workouts</h2>
            {workouts && Object.keys(workouts).length ?
                Object.keys(workouts).map(workout => <WorkoutCard key={workout} {...workouts[workout]} />) :
                <p>Loading workouts...</p>
            }
        </div>
    );
}

export default WorkoutsList;
//
