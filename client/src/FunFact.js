import React, { useState, useEffect, useRef } from 'react'
import './css/FunFact.css'

function FunFact({ funFact }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    // frontEl.current
    const backEl = useRef()
    // backEl.current

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }
    useEffect(setMaxHeight, [funFact.quesiton, funFact.answer, funFact.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{height: height}}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {funFact.question}
                <div className="card-options">
                    {funFact.options.map(option => {
                        return <div className="card-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back" ref={backEl}>{funFact.answer}</div>
        </div>
    )
}

export default FunFact