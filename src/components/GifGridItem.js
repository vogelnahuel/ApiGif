import React from 'react'

export const GifGridItem = (props) => {
    const {id,title,url} = props.img;
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p> {title} </p>
            
        </div>
    )
}
