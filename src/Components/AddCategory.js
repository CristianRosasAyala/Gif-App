import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({usaState}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = e =>{
        setinputValue( () => e.target.value)
        console.log('me ejecuto cada que cambia algo en el input')
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('hecho');
        usaState(cat => [...cat, inputValue]);

    } 
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
           <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
           ></input>
        </form>
        
    )
}
AddCategory.propTypes = {
    usaState: PropTypes.func.isRequired,
}
