export const getGifs = async (category) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=4HvUVpDNsF3gscDWshMUumcPweiiopNr&q=${category}&limit=10`;

    //peticion https
    const resp = await fetch(url);
    const {data} = await resp.json();

    //extracción de los datos en un OBJ
    const gifs = data.map(img => ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }            
        )
    )
    
    //console.log(gifs)
    //retornamos los gifs
    return gifs;
    
}