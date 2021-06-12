import styles from './ArticleList.module.css';
import { useState, useEffect } from 'react';
import { getArticles } from '../../../utils/firebase/data';
import ArticleCard from './ArticleCard';
import Loader from '../../Common/Loader';
//import { articles as articleRef} from '../../../utils/firebase/data';

function ArticleList() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        // Later for pagination :)
        // articleRef.on('value', (data) => {
        //     console.log(Object.keys(data.val()).length);
        // });
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