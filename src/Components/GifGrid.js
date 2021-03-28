import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GridCategory = ({category}) => {

    const [images, setimages] = useState([]);

    useEffect(()=>{
        getGifs(category)
            .then( setimages);
    }, [category]);
    
    

    return (
        <>
            <h2>{ category }</h2>
            <div className="card-grid">
                
                    {images.map((img) => <GifGridItem 
                                            key = {img.id}
                                            {...img}
                                            />)}
                
            </div>
        </>
    );
}
