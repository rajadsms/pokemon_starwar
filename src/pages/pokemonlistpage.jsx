import List from "../components/list";
import PokemonContainer  from "../components/pokemoncontainer";
import DataProvider from "../adapter/dataprovider";
import { useEffect, useState } from "react"
const PokemonList=()=>{
    const [containers,setContainer]=useState([])
    const [loader,setLoader]=useState(true)


    const dataPreparation=(results)=>{
       
        const coninerSet=results.map((mapData)=>{
            return <PokemonContainer name={mapData.name}/>   
        })
        setContainer(coninerSet)
    }
    useEffect(()=>{
        async function fetchdata(){
            let data=await DataProvider.getData("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            let results=data.results;
            dataPreparation(results);
            setLoader(false)

        }
        fetchdata()
    },[])
return <>
<List data={containers} parentClass="parentClass" loader={loader}/>
</>
}
export default PokemonList