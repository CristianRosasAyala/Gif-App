import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GridCategory } from './Components/GridCategory';


function GifExpertApp(props) {
    const animes = ['Doom'];
    const [categories, setState] = useState(animes);
    /* const handlerAdd = () =>{
        setstate([...state, 'nuevo anim']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory usaState = {setState}/>
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





