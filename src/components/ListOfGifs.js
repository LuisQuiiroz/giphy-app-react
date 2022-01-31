import React from 'react';
import { useState, useEffect } from 'react';
import getGifs from '../services/getGif';

import Gif from './Gif';

const ListOfGifs = ({ params }) => {

    const { keyword } = params;

    const [gifs, setGifs] = useState([]);

    const [loading, setLoading] = useState(false);


  useEffect(() => {
      setLoading(true);
    getGifs({ keyword }).then( gifs => {
        setGifs(gifs)
        setLoading(false);
    })
  }, [keyword]);

  if (loading) return <h2>Cargando</h2>

  return (
    <div>
        {
        gifs.map( ({ id, title, url })  => 
            <Gif
                id={ id }
                key={ id }
                title={ title }
                url={ url }
            />
        )
        }
    </div>
  )
  
};

export default ListOfGifs;
