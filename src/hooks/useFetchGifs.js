import React,{useState,useEffect} from 'react'
import {getGIfs} from '../helpers/GetGifs.js'

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    //se ejecuta la funcion solo cuando es renderizado por primera vez o si le pones algo es cuando  eso que le pones cambia solo se ejecuta
    useEffect(() => {
        getGIfs(category)
        .then(imgs => {
            setTimeout(() => {
                setstate({
                    data:imgs,
                    loading:false
                });
            }, 2000);
          

        })
    } ,[category])

    return state;
}
