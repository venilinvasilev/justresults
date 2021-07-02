import styles from './CreateArticle.module.css';

import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserCtx } from '../../../App';

import ModalMessage from '../../Common/ModalMessage';

import { createArticle } from '../../../utils/firebase/data';

function CreateArticle() {
    const history = useHistory();
    const userInfo = useContext(UserCtx);
    const [errorMessage, setErrorMessage] = useState('');
    function onSubmitCreateArticleHandler(ev) {
        ev.preventDefault();
        const form = ev.target;
        const topic = form.topic.value;
        const description = form.description.value;
        const content = form.content.value;
        if(!topic || !description || !content) {
            setErrorMessage({
                heading: 'Publication failed!',
                content: 'All fields are required.'
            })
            return;
        }
        const data = {
            topic,
            description,
            content,
            likes: 0,
            authorId: userInfo.uid,
            authorName: userInfo.username,
            dateCreated: Date.now()
        }
        createArticle(data)
            .then(history.push('/'))
            .catch(err => console.log(err.message))
    }

    return (
        <div className={styles.createArticleContainer}>
            <h2 className={styles.createArticleHeading}>Write an Article</h2>
            <form className={styles.createArticleForm} onSubmit={onSubmitCreateArticleHandler}>
                <label className={styles.newLineLabel} htmlFor="topic">Topic:</label>
                <input className={styles.newLineInput} name="topic" id="topic" type="text" placeholder="Give your article a name..."/>
                <label className={styles.newLineLabel} htmlFor="description">Short Description:</label>
                <input className={styles.newLineInput} name="description" id="description" type="text" placeholder="Should be described shortly and clearly..."/>
                <label className={styles.newLineLabel} htmlFor="content">Content:</label>
                <textarea className={styles.newLineTextArea} name="content" id="content" type="text" placeholder="Write every paragraph on a new line..." />
                <input className={styles.submitButton} type="submit" value="Publish" />
            </form>
            {errorMessage ? <ModalMessage message={errorMessage} handleGotIt={() => setErrorMessage('')} /> : ''}
        </div>
    );
}

export default CreateArticle;