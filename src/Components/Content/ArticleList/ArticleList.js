import styles from './ArticleList.module.css';
import { useState, useEffect } from 'react';
import { getArticles } from '../../../utils/firebase/data';
import ArticleCard from './ArticleCard';
import Loader from '../../Common/Loader';
function ArticleList() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles()
            .then(data => {
                setArticles(data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className={styles.articleListContainer}>
            <h2 className={styles.articleListHeading}>Articles</h2>
            {articles && Object.keys(articles).length ?
                Object.keys(articles).map(article => <ArticleCard id={article} key={article} {...articles[article]}/>) :
                <Loader />
            }
        </div>
    );
}

export default ArticleList;