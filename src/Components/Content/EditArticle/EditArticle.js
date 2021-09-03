import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ArticleForm from '../../Common/ArticleForm/ArticleForm';
import { editArticle, getArticle } from '../../../utils/api/data';

function EditArticle() {
    const title = 'Edit Article'
    const { id } = useParams();
    const [article, setArticle] = useState({
        topic: '',
        description: '',
        content: '',
    });
    useEffect(() => {
        getArticle(id).then((data) => {
            setArticle({
                topic: data.topic,
                description: data.description,
                content: data.content
            });
        })
    }, [id]);

    return (
        <ArticleForm onSubmitRequest={editArticle} title={title} article={article} />
    );
}

export default EditArticle;