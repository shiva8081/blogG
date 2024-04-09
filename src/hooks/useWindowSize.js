 import { useState,useEffect } from "react";

 import React from 'react'
 
 export const useWindowSize = () => {
    const [Widowsize, setWidowsize] = useState({
        width:undefined,
        heigth:undefined 
    });

    useEffect(()=>{
        const handleresize=()=>{
            setWidowsize({
                width:window.innerWidth,
                heigth:window.innerHeight
            })
        }
        handleresize();
        window.addEventListener('resize',handleresize);

       
        return ()=>window.removeEventListener('resize',handleresize)
    },[])
   return Widowsize;
 }
 