import React from 'react'

function ImageItem({ Image }) {

    return (
        <div>
            <img className='ImageListing' src={Image.urls.small} alt={Image.alt_description} />
        </div>
    )
}

export default ImageItem