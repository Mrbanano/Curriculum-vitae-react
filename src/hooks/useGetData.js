import {useState,useEffect} from 'react';

const useGetData = () =>{

    const [mydata,setData]= useState([])
    const api = 'https://cv-alvaro.firebaseio.com/cvAlvaro.json'
    
    useEffect (()=>{
        fetch(api)
         .then(response => response.json())
         .then(data => setData(data))
    },[]);

    return mydata;
}

export default useGetData;