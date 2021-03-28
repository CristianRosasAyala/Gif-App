export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=aZtfSQ5Jfxk7Ke7Ch2D0r4a5JVxZbeP8`;
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
    //Regresa promesa con la dirección de las imágenes
    return gifs;
    
}