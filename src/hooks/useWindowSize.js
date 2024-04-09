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

        const cleanUp=()=>{
            console.log('runs if useeffect dep change');
            window.removeEventListener('resize',handleresize)
        }
        return cleanUp;
    },[])
   return Widowsize;
 }
 