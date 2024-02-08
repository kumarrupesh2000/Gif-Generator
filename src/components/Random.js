// import axios from "axios";
import { useEffect } from "react";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
import { useState } from "react";
import Spinner from "./Spinner";
function Random()
{

    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState(false);
    async function fetchData()
    {

        setLoading(true)
        let output=await fetch("https://api.giphy.com/v1/gifs/random?api_key=ct6jaNhbwnobinwIxrQJUvp2IwXsl7nB")
        let outputData=await output.json()
        let imgURl=outputData.data.images.downsized_large.url;
        setGif(imgURl);
        console.log(imgURl);
        setLoading(false)


    }

   
    useEffect( () => {
        fetchData();
      },[] )


    return(
        <div className="h-[450px] object-contain w-1/2 bg-lime-600 rounded-lg p-4 mt-8 flex flex-col items-center justify-center gap-y-3">

            <h1 className="text-2xl underline font-bold">Random Gif</h1>
            {loading ?  <div className="w-3/4 h-3/4 flex items-center justify-center"><Spinner /></div> :<img className=" w-3/4 h-3/4 object-cover" src={gif} alt="gifimg"></img>}
            
            <button className="w-3/4 rounded-lg py-3 mb-3 bg-white hover:bg-slate-600 font-bold" onClick={()=>fetchData()}>Generate</button>

        </div>
    )
}
export default Random;