import React from 'react'
import './css/BoxContainer.css'
import ArticleBox from './ArticleBox.js'
import { useSelector } from "react-redux"
import CardList from "./features/CardList"
import { fetchCards } from "./features/cardsSlice";


function BoxContainer({ articles }) {
    console.log(articles)
    return (
        <div className="boxContainer">
            <div className="box__grid">
                {articles.map(article => {
                    return (
                        <ArticleBox article={article} />)
                })}
            </div>
        </div>
    )
}

export default BoxContainer

// (
//     <>

//         {entities.length &&
//             entities.map((entity) => (
//                 <div>
//                     {entity.name}
//                 </div>
//             ))}
//     </>
// )