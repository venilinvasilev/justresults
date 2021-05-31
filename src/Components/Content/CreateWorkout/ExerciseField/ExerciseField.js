import styles from './ExerciseField.module.css';

function ExerciseField(props) {
    return (
        <div className={styles.fourColumnWrapper}>
            <div className={styles.oneColumnWrapper}>
                <label htmlFor={`exercise_${props.id}`} className={styles.inputLabel}>Exercise</label>
                <div className={styles.divInput}>
                    <input type="text" name={`exercise_${props.id}`} id={`exercise_${props.id}`} />
                </div>
            </div>
            <div className={styles.threeColumnWrapper}>
                <div className={styles.fieldWrapper}>
                    <label htmlFor={`sets_${props.id}`} className={styles.inputLabel}>Sets</label>
                    <div className={styles.divInput}>
                        <input type="number" name={`sets_${props.id}`} id={`sets_${props.id}`} />
                    </div>
                </div>
                <div className={styles.fieldWrapper}>
                    <label htmlFor={`reps_${props.id}`} className={styles.inputLabel}>Reps</label>
                    <div className={styles.divInput}>
                        <input type="number" name={`reps_${props.id}`} id={`reps_${props.id}`} />
                    </div>
                </div>
                <div className={styles.fieldWrapper}>
                    <label htmlFor={`rest_${props.id}`} className={styles.inputLabel}>Rest</label>
                    <div className={styles.divInput}>
                        <input type="number" name={`rest_${props.id}`} id={`rest_${props.id}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExerciseField;