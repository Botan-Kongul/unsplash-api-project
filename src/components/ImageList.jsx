import React from 'react'
import ImageItem from './ImageItem'

function ImageList({ ImagesPlaceHolder }) {
    return (
        <div className='ImageList'>
            {ImagesPlaceHolder.map((Image, index) => {
                return <ImageItem key={index} Image={Image} />;
            })}
        </div>
    )
}

export default ImageList