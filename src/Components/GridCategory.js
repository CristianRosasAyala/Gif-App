import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GridCategory = ({category}) => {

    const [images, setimages] = useState([]);

    useEffect(()=>{
        getGifs();
    }, []);
    
    const getGifs = async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Doom&limit=10&api_key=aZtfSQ5Jfxk7Ke7Ch2D0r4a5JVxZbeP8';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map( img =>{
            return{
                id: img.id,
                title: img.title, 
                url: img.images.downsized.url,
            }
        });
        console.log(gifs);
        setimages(gifs);
    }

    return (

        <div>
            <h2>{ category }</h2>
            
                {images.map((img) => <GifGridItem 
                                        key = {img.id}
                                        {...img}
                                        />)}
            
        </div>
    )
}
