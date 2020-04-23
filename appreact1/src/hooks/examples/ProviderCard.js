import React from 'react'
export const ProviderCard = ({song}) => {
    const testApply = ()=>{
        console.log(' testApply ')
    }
    return (
        <div>
                <img
                src={song.albumArt}
                alt=""
            />
            <div className="content">
                <h2>{song.name}</h2>
                <span>BY: {song.artist}</span>
            </div>
        </div>
    )
}
export default ProviderCard