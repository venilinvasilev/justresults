import styles from './ArticleCard.module.css';
import { Link } from 'react-router-dom';
function ArticleCard({
    authorName,
    description,
    dateCreated,
    topic,
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
    return (
        <div className={styles.articleCardContainer}>
            <h2 className={styles.articleCardTopic}>{topic}</h2>
            <p className={styles.articleDescription}>{description}</p>
            <div className={styles.articleInfo}>
                <span className={styles.articleDate}>Date Published: <strong>{formatDate(dateCreated)}</strong></span>
                <span className={styles.articleAuthor}>Author: <strong>{authorName}</strong></span>
                <span className={styles.articleLikes}>Likes: <strong>{likes ? likes : 0}</strong></span>
                <Link to={`/articles/${id}`}className={styles.articleReadMore}>Show</Link>
            </div>
        </div>
    );
}

export default ArticleCard;