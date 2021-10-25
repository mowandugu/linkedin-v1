import React from 'react'

function zoomtest() {
    const newsArticle = (heading, subtitle) => {
        <div className='widget_article'>
            <div className='widget__articleleft'>
                
            </div>

            <div className='widget__articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    
    return (
        <div className='widgets'>
            <div className='widget__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Coronavirus: Lagos updates", "Top news - 345 readers")}
            {newsArticle("Bitcoin hits new hight", "Top news - 3433 readers")}
            
        </div>
    )
}

export default zoomtest
