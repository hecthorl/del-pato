
const getGifs = async cat => {
   const baseUrl = `https://api.giphy.com/v1/gifs/search?q=${cat}&limit=10&api_key=76c24rwUDNfAINsJpFQo8zB7KVKTo6hO`

   const resp = await fetch(baseUrl);
   const {data} = await resp.json();

   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         img_url: img.images.downsized_medium.url
      }
   })

   return gifs;
};

export default getGifs;