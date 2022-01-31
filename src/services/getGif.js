const apikey = '8gHqzy3JUHtC8MypLEhEjVDvlFf6kJic'

export default function getGifs ({ keyword = 'rem'} = {} ) {

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch( apiUrl )
      .then( res => res.json() )
      .then( response => {
        const { data = [] } = response;
        if ( Array.isArray(data) ) {
          const gifs = data.map( image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return { title, id, url }
            });
          return gifs;
        }
    })
}