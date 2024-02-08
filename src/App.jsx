import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {


  return(
  <div className="background w-full h-auto flex flex-col items-center">

    <div className="bg-white h-[40px] w-10/12 flex justify-center items-center mt-[20px] rounded-full">
      <h1 className="font-bold text-3xl">RANDOM GIFS</h1>
    </div>

    <Random/> 
    <Tag/>



  </div>
  )
}
