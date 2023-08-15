const DataProvider=()=>{
  return{
    getData:async (api)=>{
        let data= await fetch(api)
        let rawData=await data.json()
        return rawData
        }
  }  
    }

export default DataProvider();