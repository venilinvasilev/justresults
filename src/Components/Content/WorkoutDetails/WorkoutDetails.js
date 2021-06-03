import styles from './WorkoutDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWorkout } from '../../../utils/firebase/data';
import WorkoutExercises from './WorkoutExercises';

function WorkoutDetails() {
    const { id } = useParams();
    const [workout, setWorkout] = useState();
    useEffect(() => {
        getWorkout(id)
            .then((data) => setWorkout(data))
            .catch(err => console.log(err.message))
    }, []);

    return (workout ?
        <div className={styles.workoutDetailsContainer}>
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
            <WorkoutExercises exercises={workout.exercises}/>
            <div>
                <span>Date:</span>
                <span>Author:{workout.author}</span>
            </div>
        </div>
        :
        <div>Loading... </div>
    );
}

export default WorkoutDetails;