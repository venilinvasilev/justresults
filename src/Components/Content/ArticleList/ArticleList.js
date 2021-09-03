import styles from './ArticleList.module.css';
import { useState, useEffect } from 'react';
import { getAllArticles } from '../../../utils/api/data';
import ArticleCard from './ArticleCard';
import Loader from '../../Common/Loader';

function ArticleList() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getAllArticles().then((data) => {
            setArticles(data)
        })
    }, []);

    return (
        <div className={styles.articleListContainer}>
            <h2 className={styles.articleListHeading}>Articles</h2>
            {articles && articles.length ?
                articles.map(article => <ArticleCard id={article._id} key={article._id} article={article} />) :
                <Loader />
            }
        </div>
    );
}

export default ArticleList;