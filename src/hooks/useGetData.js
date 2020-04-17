import {useState,useEffect} from 'react';

const useGetData = () =>{

    const [mydata,setData]= useState([])
    const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me'
    
    useEffect (()=>{
        fetch(api)
         .then(response => response.json())
         .then(data => setData(data))
    },[]);

    return mydata;
}

export default useGetData;