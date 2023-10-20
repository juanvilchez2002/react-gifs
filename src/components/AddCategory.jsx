import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue]= useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        //console.log(inputValue);

        //validamos que la caja tenga mas de un caracter caso contrario no podra actualizar inputValue
        if(inputValue.trim().length <=1) return;


        //setCategories( categories => [...categories, inputValue])
        onNewCategory(inputValue.trim());

        setInputValue(''); //limpiamos la caja
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
            
    )
}
