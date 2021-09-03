import './ArticleDetails.scss';
import Loader from '../../Common/Loader';
import ArticleContent from './ArticleContent';

import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useReducerWithThunk } from '../../../hooks/useReducerWithThunk';

import articleDetailsReducer, {
    initialState,
    likeArticle,
    setArticleData,
} from './articleDetailsReducer';

import { formatDate } from '../../../utils/misc';
import { useEffect } from 'react';

function ArticleDetails() {
    const { id } = useParams();
    const history = useHistory();
    const user = useSelector((state) => state.userAuth);
    const [details, dispatch] = useReducerWithThunk(articleDetailsReducer, initialState);

    useEffect(() => {
        if (user._id && !details.article.loaded) {
            dispatch(setArticleData(id, user._id));
        }
    }, [user._id, dispatch, id, details.article.loaded]);
    const likeHandler = async () => {
        dispatch(likeArticle(details.article._id, details.article.likes));
    };

    const goToEdit = () => {
        history.push('/edit/' + details.article._id);
    };

    return (
        <div className="container ArticleDetails">
            {details.article.loaded ? (
                <div className="bg-light p-5 p-md-5 ArticleDetails__container">
                    <h2 className="ArticleDetails__title">{details.article.topic}</h2>
                    <h3 className="ArticleDetails__description">{details.article.description}</h3>
                    <ArticleContent content={details.article.content} />
                    <div className="ArticleDetails__controls">
                        {user.role !== 'guest' && !details.ui.hasLiked ? (
                            <button
                                onClick={likeHandler}
                                title="Like"
                                className="ArticleDetails__controls__like"
                            >
                                <i className="far fa-thumbs-up fa-2x text-dark"></i>Like
                            </button>
                        ) : (
                            ''
                        )}
                        {details.ui.isAuthor || user.role === 'admin' ? (
                            <>
                                <button title="Delete" className="ArticleDetails__controls__delete">
                                    <i className="fas fa-trash-alt fa-2x text-dark"></i>Delete
                                </button>
                                <button
                                    onClick={goToEdit}
                                    title="Edit"
                                    className="ArticleDetails__controls__edit text-dark"
                                >
                                    <i className="fas fa-edit fa-2x text-dark"></i>Edit
                                </button>
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="row ArticleDetails__info">
                        <span className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start ArticleDetails__info__date">
                            Date Published: {formatDate(details.article.createdAt)}
                        </span>
                        <span className="col-12 col-lg-4 d-flex justify-content-center ArticleDetails__info__author">
                            Author:{' '}
                            {`${details.article.author.firstName} ${details.article.author.lastName}`}
                        </span>
                        <span className="col-12 col-lg-2 d-flex justify-content-center justify-content-lg-end ArticleDetails__info__likes">
                            Likes: {details.article.likesCount}
                        </span>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default ArticleDetails;
