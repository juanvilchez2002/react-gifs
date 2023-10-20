//un Hook es una función que retorna algo
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //guardar las imagenes
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        //codigo que se desea ejecutar
        getImages();
    }, [])  

    return{
        images,
        isLoading
    }
}
