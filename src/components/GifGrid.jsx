import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => { 

    const {images, isLoading } = useFetchGifs( category );
    //console.log({ isLoading});

    /*
    //se comenta para aprender a usar Custom Hooks
    //estado local para manterner las imagenes, se preserva cuando se redibuja el componente
    const [images, setImages] = useState([]);

    //guardar las imagenes
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        //codigo que se desea ejecutar
        getImages();
    }, [])     
    */
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading&&(<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {/* images.map */}
                {
                    images.map( (images) =>
                            (
                                <GifItem 
                                    key={ images.id } 
                                    /*
                                    title = { images.title }
                                    url = { images.url }*/

                                    //tecnica para exparcir las propiedades, usando cuando se tiene muchas prop
                                    {...images}
                                />
                            )
                        )
                }
            </div>
        </>
    )
}
