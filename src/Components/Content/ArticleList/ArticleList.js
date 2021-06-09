import styles from './ArticleList.module.css';
import { useState, useEffect } from 'react';
import { getArticle, getArticles, getPopularArticles } from '../../../utils/firebase/data';
import ArticleCard from './ArticleCard';
import Loader from '../../Common/Loader';
function ArticleList() {
    const [articles, setArticles] = useState([]);
    getPopularArticles().then(data => console.log(data.val()))
    useEffect(() => {
        getArticles()
            .then(data => {
                setArticles(data)
                console.log(data);
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