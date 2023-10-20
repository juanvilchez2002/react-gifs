import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    /* inicializamos con un arreglo vacio */
    const [categories, setCategories] = useState(['One puch']);
    
    const onAddCategory = (newCategory) =>{
        //validando si el valor se encuentra en el arreglo de "categories"
        //1era forma
        if(categories.includes(newCategory)) return;


        //setCategories(['Valorant',...categories]);
        
        //console.log(newCategory);
        
        //1ra forma
        setCategories(cat => [newCategory, ...cat]); 

        //2da forma
        // setCategories([...categories, newCategory]);
    }
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory   
            //setCategories={ setCategories } 
            onNewCategory = { (value) =>onAddCategory(value) }
        />

        {/* Listado de Gift 
        <button onClick={onAddCategory}>Agregar</button>*/}
        {
        categories.map( (category) =>(
                <GifGrid 
                    key={ category } 
                    category={ category}
                />)
            )
        }
        {/* Gift Item */}
    </>
  )
}
