import styles from './ArticleDetails.module.css';
import Loader from '../../Common/Loader';
import ArticleContent from './ArticleContent';
import { UserCtx } from '../../../App';
import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getArticle, updateLikes, getUserLiked, deleteArticle, articles } from '../../../utils/firebase/data';
import { formatDate } from '../../../utils/misc';
function ArticleDetails() {
    const userInfo = useContext(UserCtx);
    const history = useHistory();
    const { id } = useParams();
    const [article, setArticle] = useState();
    const [likes, setLikes] = useState();
    const [liked, setLiked] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if (userInfo && article && userInfo.uid === article.authorId) {
            setIsOwner(true);
        }
    }, [article, userInfo])
    useEffect(() => {
        if (userInfo && userInfo !== 'guest') {
            getUserLiked(userInfo.uid, id).then((data) => setLiked(data));
        }
    }, [userInfo, likes]);
    useEffect(() => {
        getArticle(id)
        .then((data) => {
            setArticle(data);
        })
        .catch(err => console.log(err.message))
        articles.child(id).child('likes').on('value', (snapshot) => {
            setLikes(snapshot.val());
        })
        return () => articles.child(id).child('likes').off();
    }, []);
    const addLike = (ev) => {
        ev.preventDefault();
        updateLikes(id, userInfo.uid)
    }
    const delArticle = (ev) => {
        ev.preventDefault();
        const confirmed = window.confirm('Are you sure you want to delete this article ?');
        if (confirmed) {
            deleteArticle(id).then(() => history.push('/articles'));
        }
    }
    const goToEdit = () => {
        history.push('/edit/' + id);
    }

    return (
        <div className={styles.articleDetailsWrapper}>
            {article ?
                <div className={styles.articleDetailsContainer}>
                    <h1 className={styles.articleDetailsHeading}>{article.topic}</h1>
                    <h3 className={styles.articleDetailsDescription}>{article.description}</h3>
                    <ArticleContent content={article.content} />
                    <div className={styles.articleControls}>
                        {!liked && userInfo !== 'guest' ?
                            <button onClick={addLike} title="Like" className={styles.likeButton}><i className="far fa-thumbs-up fa-2x"></i>Like</button> :
                            ''
                        }
                        {isOwner ?
                            <span>
                                <button onClick={delArticle} title="Delete" className={styles.deleteButton}><i className="fas fa-trash-alt fa-2x"></i>Delete</button>
                                <button onClick={goToEdit} title="Edit" className={styles.editButton}><i className="fas fa-edit fa-2x"></i>Edit</button>
                            </span> :
                            ''
                        }
                    </div>
                    <div className={styles.articleInfo}>
                        <span className={styles.articleDate}>Date Published: {formatDate(article.dateCreated)}</span>
                        <span className={styles.articleAuthor}>Author: {article.authorName}</span>
                        <span className={styles.articleLikes}>Likes: {likes}</span>
                    </div>
                </div> :
                <Loader />
            }
        </div>
    );
}

export default ArticleDetails;