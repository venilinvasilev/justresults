import styles from './ArticleContent.module.css';

function ArticleContent({ content }) {
    let paragraphs = content.split('\n');
    return (
        <div className={styles.articleDetailsContent}>
            {paragraphs.map((paragraph) => <p className={styles.articleDetailsParagraph}>{paragraph}</p> )}
        </div>
    )
}

export default ArticleContent;