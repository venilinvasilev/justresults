import './ArticleCard.scss';
import { Link } from 'react-router-dom';
import { formatDate, truncate } from '../../../../utils/misc';

function ArticleCard({ article }) {
    return (
        <div className="col-12 col-lg-6 col-xl-4 ArticleCard">
            <div className="card bg-dark p-4 mb-3">
                <img
                    className="card-img-top"
                    src={`./protein_isolate_now_foods.jpg`}
                    alt={article.topic}
                />
                <div className="card-body px-0 ArticleCard__body">
                    <h5 className="card-title ArticleCard__title">{article.topic}</h5>
                    <p className="card-text">{truncate(article.description, 64, true)}</p>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex justify-content-between">
                            <i className="far fa-calendar p-1"></i>
                            <div className="d-inline-block p-1 ArticleCard__date">
                                {formatDate(article.createdAt)}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <i className="far fa-thumbs-up fa p-1"></i>
                            <div className="d-inline-block p-1">{article.likesCount}</div>
                        </div>
                        {/* <div className="d-flex justify-content-between">
                            <i className="fas fa-user p-1"></i>
                            <div className="d-inline-block p-1">{`${article.author.firstName} ${article.author.lastName}`}</div>
                        </div> */}
                    </div>
                    <div className="d-flex justify-content-end">
                        <Link
                            to={`/articles/${article._id}`}
                            className="btn p-1           btn-light ArticleCard__link"
                        >
                            <i className="fas fa-arrow-right text-dark p-1"></i>
                            <div className="d-inline-block text-dark p-1">Read more</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
