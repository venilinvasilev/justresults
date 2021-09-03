import './Home.scss';

import ArticleCard from '../ArticleList/ArticleCard';
import Loader from '../../Common/Loader';

import { useState, useEffect } from 'react';
import { getAllArticles } from '../../../utils/api/data';

function Home() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getAllArticles('?sort=-likesCount&limit=3').then((articles) => {
            setArticles(articles);
        });
    }, []);
    return (
        <div className="Home container pt-5">
            <div className="Home__welcome-text">
                <h1 className="Home__welcome-text__title text-center">
                    Forget about the excuses - focus on the results!
                </h1>
                <p className="Home__welcome-text__content">
                    Created to help lifters, athletes, beginners and fitness enthusiasts connect
                    with like-minded people. Members of the website share their tips, advice to help
                    others get bigger, stronger and leaner!
                </p>
            </div>
            <div className="Home__popular-articles">
                <h2 className="Home__popular-articles__title">Popular Articles</h2>
                <div className="row">
                    {articles && Object.keys(articles).length ? (
                        articles.map((article) => (
                            <ArticleCard id={article._id} key={article._id} article={article} />
                        ))
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
