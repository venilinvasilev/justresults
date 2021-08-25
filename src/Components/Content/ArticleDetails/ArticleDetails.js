import styles from './ArticleDetails.module.css';
import Loader from '../../Common/Loader';
import ArticleContent from './ArticleContent';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useReducerWithThunk } from '../../../hooks/useReducerWithThunk';

import articleDetailsReducer, { initialState, likeArticle, setArticleData } from './articleDetailsReducer';

import { formatDate } from '../../../utils/misc';

function ArticleDetails() {
    const { id } = useParams();
    const history = useHistory();
    const user = useSelector((state) => state.userAuth);
    const [details, dispatch] = useReducerWithThunk(articleDetailsReducer, initialState);

    useEffect(() => {
        if(!user._id) return;        
        dispatch(setArticleData(id, user._id));
    }, [user]);

    const likeHandler = async () => {
        dispatch(likeArticle(details.article._id, details.article.likes));
    }

    const goToEdit = () => {
        history.push('/edit/' + details.article._id);
    }
    
    return (
        <div className={styles.articleDetailsWrapper}>
            {details.article.loaded ?
                <div className={styles.articleDetailsContainer}>
                    <h1 className={styles.articleDetailsHeading}>{details.article.topic}</h1>
                    <h3 className={styles.articleDetailsDescription}>{details.article.description}</h3>
                    <ArticleContent content={details.article.content} />
                    <div className={styles.articleControls}>
                        {user.role !== 'guest' && !details.ui.hasLiked ?
                            <button onClick={likeHandler} title="Like" className={styles.likeButton}><i className="far fa-thumbs-up fa-2x"></i>Like</button> :
                            ''
                        }
                        {details.ui.isAuthor ?
                            <span>
                                <button title="Delete" className={styles.deleteButton}><i className="fas fa-trash-alt fa-2x"></i>Delete</button>
                                <button onClick={goToEdit} title="Edit" className={styles.editButton}><i className="fas fa-edit fa-2x"></i>Edit</button>
                            </span> :
                            ''
                        }
                    </div>
                    <div className={styles.articleInfo}>
                        <span className={styles.articleDate}>Date Published: {formatDate(details.article.createdAt)}</span>
                        <span className={styles.articleAuthor}>Author: {`${details.article.author.firstName} ${details.article.author.lastName}`}</span>
                        <span className={styles.articleLikes}>Likes: {details.article.likesCount}</span>
                    </div>
                </div> :
                <Loader />
            }
        </div>
    );
}

export default ArticleDetails;