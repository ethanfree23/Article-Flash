import './css/ArticleBox.css'

import React from 'react'

function ArticleBox({ article }) {
console.log(article)

    return (
        <div className="article__box">
            <p>{article.language}</p>
            <p>{article.title}</p>
            {/* <p>{article.link}</p> */}
            <p>{article.description}</p>
            <p>{article.full_description}</p>
        </div>
    )
}

export default ArticleBox