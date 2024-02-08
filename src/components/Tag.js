 // import axios from "axios";
import { useEffect } from "react";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
import { useState } from "react";
import Spinner from "./Spinner";
function Tag()
{

    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState(false);
    const[tag,setTag]=useState('naruto')


    function changeHandler(event)
    {
        setTag(event.target.value);
    }
    async function fetchData(tag) {
        setLoading(true);
        let output = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=ct6jaNhbwnobinwIxrQJUvp2IwXsl7nB&tag=${tag}`);
        let outputData = await output.json();
        let imgURl = outputData.data.images.downsized_large.url;
        setGif(imgURl);
        console.log(imgURl);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchData(tag);
    }, [tag, setGif, setLoading]);
    


    return(
        <div className="h-[450px] object-contain w-1/2 bg-lime-600 rounded-lg p-6 mt-8 flex flex-col items-center justify-center gap-y-3">

            <h1 className="text-2xl underline font-bold uppercase">Random {tag} Gif</h1>
            {loading ?  <div className="w-3/4 h-3/4 flex items-center justify-center"><Spinner /></div> :<img className=" w-3/4 h-2/4 object-cover" src={gif} alt="gifimg"></img>}
            <input onChange={changeHandler} className="w-3/4 py-3 rounded-lg text-center uppercase font-bold" value={tag}></input>
            <button className="w-3/4 rounded-lg py-3 mb-3 bg-white hover:bg-slate-600 font-bold" onClick={()=>fetchData()}>Generate</button>

        </div>
    )
}
export default Tag;