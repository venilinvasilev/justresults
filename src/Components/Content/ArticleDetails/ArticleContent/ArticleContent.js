import './ArticleContent.scss';

function ArticleContent({ content }) {
    let paragraphs = content.split('\n');
    return (
        <div className="container ArticleContent">
            {paragraphs.map((paragraph, i) => (
                <p key={i} className="ArticleContent__paragraph">
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

export default ArticleContent;
