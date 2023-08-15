import List from "../components/list";
import Container  from "../components/container";
import DataProvider from "../adapter/dataprovider";
import { useEffect, useState } from "react";
import sorting from '../util';
const ListPage=()=>{
    const [containers,setContainer]=useState([])
    const [loader,setLoader]=useState(true)

    const dataPreparation=(results)=>{
        const finalData=[]
        let maxFilm=0;
        for(let i=0;i<results.length;i++){
        if(Number(results[i].crew) < 10){   
            let count=results[i]?.films?.length||0;
            if(count>maxFilm){
                maxFilm=count
            }
            finalData.push(results[i])
        }
        }
        let sortedData=sorting(finalData,"crew");
        const coninerSet=sortedData.map((mapData)=>{
            const noOFFilm=mapData?.films?.length|| 0;
            return <Container name={mapData.name} model={mapData.model} filmNumber={noOFFilm} maxFilm={maxFilm}/>   
        })
        setContainer(coninerSet)
    }

    useEffect(()=>{
        async function fetchdata(){
            let data=await DataProvider.getData("https://swapi.dev/api/starships/")
            let results=data.results;
            dataPreparation(results);
            setLoader(false)
        }
        fetchdata()
    },[])

    return(
        <>
        <h1>Sample React project using SWAPI API</h1>
        <h2>Results are filtered to starships with a crew size less than 10 and sorted by crew size </h2>
        <h3>The starship that has featured in most film will will cup</h3>
        <List data={containers} loader={loader}/>

        </>
    )
}
export default ListPage