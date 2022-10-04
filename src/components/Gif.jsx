import React from 'react'

function Gif(props) {
    return (
        <div className="display_gif">
            <img src={props.gif} alt=""></img>
        </div>
    )
}

export default Gif