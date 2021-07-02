import styles from './ExerciseRow.module.css';

function ExerciseRow(props) {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.name}</td>
            <td>{props.sets}</td>
            <td>{props.reps}</td>
            <td>{props.rest}</td>
        </tr>
    );
}

export default ExerciseRow;