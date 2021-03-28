import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GridCategory } from './Components/GifGrid';


function GifExpertApp(props) {
    const gifs = ['JOJOS'];
    const [categories, setCategories] = useState(gifs);
    /* const handlerAdd = () =>{
        setstate([...state, 'nuevo anim']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory usaState = {setCategories}/>
            <ol>
                {
                    categories.map(category => (
                        <GridCategory 
                            key = {category}
                            category= {category}
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp





