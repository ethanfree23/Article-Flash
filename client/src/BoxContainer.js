import React from 'react'
import './css/BoxContainer.css'
import Box from './Box.js'
import { useSelector } from "react-redux"
import CardList from "./features/CardList"
import { fetchCards } from "./features/cardsSlice";


function BoxContainer({ type }) {
    return (
        <div className="boxContainer">
            <div className="box__grid">
                {/* <h1>{type}</h1> */}
                <Box type={type} />
                <Box type={type} />
                <Box type={type} />
                <Box type={type} />
                <Box type={type} />
                <Box type={type} />
                <Box type={type} />
                <Box type={type} />
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