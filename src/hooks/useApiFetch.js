import  axios  from 'axios';
import { useEffect,useState } from 'react'

import React from 'react'

export const useApiFetch = (baseurl) => {
    const [Data, setData] = useState([]);
    const [isloading, setisloading] = useState(false);
    const [fetcherror, setfetcherror] = useState(null);

    useEffect(()=>{
        let isMounted=true;
        const source=axios.CancelToken.source();

        const fetchdata=async(url)=>{
            setisloading(true);
            try {
                const response=await axios.get(url,{
                    cancelToken:source.token
                })
                if(isMounted){
                    setData(response.data);
                    setfetcherror(null)
                }

                
            } catch (err) {
                if(isMounted){
                    setData([]);
                    setfetcherror(err.message)
                }

                
            }finally{
                isMounted&&setisloading(false)
            }
        }
        fetchdata(baseurl);
        const cleanup=()=>{
            
            isMounted=false;
            source.cancel();

        }
        return cleanup;
    },[baseurl ])
  return {Data,fetcherror,isloading}
}
