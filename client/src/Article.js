import './css/Article.css'

import React from 'react'
import { useSelector } from "react-redux";

import Header from './Header.js';

function Article() {
    const articles = useSelector((state) => state.articles)

    console.log(articles)

    return (
        <>
            <Header />
            <div className="article__container">
                <div className="article__container_article">
                    Article
                </div>
            </div>
        </>
    )
}

export default Article;