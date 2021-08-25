import styles from './ArticleForm.module.css';

import { useHistory, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { createArticle } from '../../../utils/api/data';
import ModalMessage from '../../Common/ModalMessage';

function ArticleForm({ onSubmitRequest, title, article = {
    topic: '',
    description: '',
    content: ''
} }) {
    //const user = useSelector((state) => state.userAuth);
    const { id } = useParams();
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const input = {
        topic: useRef(),
        description: useRef(),
        content: useRef(),
    }
    async function onSubmitArticleFormHandler(ev) {
        ev.preventDefault();
        const form = {
            topic: input.topic.current.value,
            description: input.description.current.value,
            content: input.content.current.value
        }
        try {
            console.log(form)
            const article = await onSubmitRequest(form, id);
            history.push(`/articles/${article._id}`);
        } catch (err) {
            setErrorMessage({
                heading: 'Publication failed!',
                content: err.message
            })
        }

    }
    return (
        <div className={styles.createArticleContainer}>
            <h2 className={styles.createArticleHeading}>{title}</h2>
            <form className={styles.createArticleForm} onSubmit={onSubmitArticleFormHandler}>
                <label className={styles.newLineLabel} htmlFor="topic">Topic:</label>
                <input ref={input.topic} className={styles.newLineInput} name="topic" id="topic" type="text" placeholder="Give your article a name..." defaultValue={article.topic}/>
                <label className={styles.newLineLabel} htmlFor="description">Short Description:</label>
                <input ref={input.description} className={styles.newLineInput} name="description" id="description" type="text" placeholder="Should be described shortly and clearly..." defaultValue={article.description}/>
                <label className={styles.newLineLabel} htmlFor="content">Content:</label>
                <textarea ref={input.content} className={styles.newLineTextArea} name="content" id="content" type="text" placeholder="Write every paragraph on a new line..." defaultValue={article.content}/>
                <input className={styles.submitButton} type="submit" value="Publish" />
            </form>
            {errorMessage ? <ModalMessage message={errorMessage} handleGotIt={() => setErrorMessage('')} /> : ''}
        </div>
    );
}

export default ArticleForm;