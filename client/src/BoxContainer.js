import React from 'react'
import './BoxContainer.css'
import Box from './Box.js'



function BoxContainer({ type }) {
    return (
        <div className="boxContainer">
            <h1>{type}</h1>
            <Box type={type}/>
            <Box type={type}/>
            <Box type={type}/>
            <Box type={type}/>
            <Box type={type}/>
            <Box type={type}/>
            <Box type={type}/>
            <Box type={type}/>
        </div>
    )
}

export default BoxContainer