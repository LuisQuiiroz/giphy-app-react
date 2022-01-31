import React from 'react';
import './Gifs.css'

const Gif = ( { title, id, url } ) => {
  return(
    <a href={ `#${ id }` } className='Gif'>
        <h4> { title } </h4>
        <img src={ url }></img>
        
    </a>
  )
};

export default Gif;
