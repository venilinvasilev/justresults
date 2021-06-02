import styles from './WorkoutExercises.module.css';
import ExerciseRow from './ExerciseRow';

function WorkoutExercises({
    exercises
}) {
    return (
        <table>
            <tr>
                <th>#</th>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Rest</th>
            </tr>
            {exercises.map(exercise => <ExerciseRow {...exercise}/>)}
        </table>
    );
} 

export default WorkoutExercises;