import React from 'react'
import './css/Box.css'
import { useSelector } from "react-redux"
import CardList from "./features/CardList"
import { fetchCards } from "./features/cardsSlice";

function Box() {

    const entities = useSelector((state) => state.entities);

    // console.log(entities.map((entity)))
    return (
        <div className="box">
            <span>
                <>
                    {entities?.length &&
                        entities.map((entity) => (
                            <div>
                                {entity.name}
                            </div>
                        ))}
                        
                </>
            </span>
        </div>
    )
}

export default Box;


{/* name of set, # of terms, avatar, username */ }

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