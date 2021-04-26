import React,{useState} from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid =  ({category}) => {

    const {data:images,loading}=useFetchGifs(category);

    //const [images,setImages]= useState([]);

    

      
   
   

    return (
        <>
        <h3>{category} </h3>

        {loading ? <p>Loading...</p>:null}
        <div className="card-grid">
           
            
                
                    { images.map(img =>
                       <GifGridItem
                        img={img}
                        key={img.id}
                       />
                          )
                    }
                    
                 
          
            
        </div>
        </>
    )
}
