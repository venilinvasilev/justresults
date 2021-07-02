import styles from './Home.module.css';

import ArticleCard from '../ArticleList/ArticleCard';
import Loader from '../../Common/Loader';

import { useState, useEffect } from 'react';
import { getPopularArticles } from '../../../utils/firebase/data';
function Home() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getPopularArticles()
            .then(data => {
                setArticles(data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className={styles.homeWrapper}>
            <div className={styles.homeSection}>
                <h3 className={styles.homeHeading}>No excuses JustResults!</h3>
                <p className={styles.welcomeContent}>
                    JustResults is created to help lifters, athletes, beginners and fitness enthusiasts connect with like-minded people.
                    Members of the website share their tips, advice to help others get bigger, stronger and leaner!
                    </p>
            </div>
            <div className={styles.popularArticlesWrapper}>
                <h2 className={styles.popularArticlesHeading}>Popular Articles</h2>
                {articles && Object.keys(articles).length ?
                    Object.keys(articles).map(article => <ArticleCard id={article} key={article} {...articles[article]} />) :
                    <Loader />
                }
            </div>

        </div>
    );
}

export default Home;