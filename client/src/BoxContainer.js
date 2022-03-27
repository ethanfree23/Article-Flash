import React from 'react'
import './css/BoxContainer.css'
import Box from './Box.js'



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