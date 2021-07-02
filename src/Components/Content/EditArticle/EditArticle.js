import styles from './EditArticle.module.css';

import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { UserCtx } from '../../../App';
import Loader from '../../Common/Loader'
import { editArticle, getArticle } from '../../../utils/firebase/data';

function EditArticle() {
    const { id } = useParams();
    const history = useHistory();
//    const userInfo = useContext(UserCtx);
    const [article, setArticle] = useState();
    useEffect(() => {
        getArticle(id).then((data) => setArticle(data));
    }, [id])
    function onSubmitEditArticleHandler(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = {
            topic: form.topic.value,
            description: form.description.value,
            content: form.content.value,
            likes: article.likes,
            authorId: article.authorId,
            authorName: article.authorName,
            dateCreated: article.dateCreated
        }
        editArticle(id, data)
            .then(history.push('/articles'))
            .catch(err => console.log(err.message))
    }

    return (
        <div className={styles.editArticleContainer}>
            <h2 className={styles.editArticleHeading}>Edit Article</h2>
            {article ?
                <form className={styles.editArticleForm} onSubmit={onSubmitEditArticleHandler}>
                    <label className={styles.newLineLabel} htmlFor="topic">Topic:</label>
                    <input className={styles.newLineInput} name="topic" id="topic" type="text" defaultValue={article.topic} />
                    <label className={styles.newLineLabel} htmlFor="description">Short Description:</label>
                    <input className={styles.newLineInput} name="description" id="description" type="text" defaultValue={article.description} />
                    <label className={styles.newLineLabel} htmlFor="content">Content:</label>
                    <textarea className={styles.newLineTextArea} name="content" id="content" type="text" defaultValue={article.content} />
                    <input className={styles.submitButton} type="submit" value="Edit" />
                </form> :
            <Loader />
            }

        </div>
    );
}

export default EditArticle;