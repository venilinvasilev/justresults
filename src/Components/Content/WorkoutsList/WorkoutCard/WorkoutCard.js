import styles from './WorkoutCard.module.css';
import { Link } from 'react-router-dom';
function WorkoutCard({
    ownerName,
    description,
    dateAdded,
    name,
    likes,
    id
}) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
    dateAdded = formatDate(dateAdded);
    return (
        <Link className={styles.workoutCardWrapper} to={`/workouts/${id}`}>
            <div>
                <h3 className={styles.workoutCardHeading}>{name}</h3>
                <p className={styles.workoutCardDescription}>{description}</p>
                <div className={styles.workoutInfo}>
                    <span>
                        Author: <strong>{ownerName}</strong>
                    </span>
                    <span>
                        Date Added: <p>{dateAdded}</p>
                    </span>
                    <span>
                        Likes: <p>{likes ? likes : '0'}</p>
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default WorkoutCard;