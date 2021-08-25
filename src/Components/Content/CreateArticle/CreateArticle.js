import { createArticle } from '../../../utils/api/data';
import ArticleForm from '../../Common/ArticleForm/ArticleForm';

function CreateArticle() {
    const title = 'Write an article';
    return (
        <ArticleForm onSubmitRequest={createArticle} title={title}/>
    );
}

export default CreateArticle;