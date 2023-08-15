export default function sorting(arr,key){
    if(arr.length===1){
        return arr
    }
    const mid=arr.length/2;
    const left=arr.slice(0,mid);
    const right=arr.slice(mid)
    return merge(sorting(left,key),sorting(right,key),key)
}
    const merge=(left,right,key)=>{
        let result = []
        let indexLeft = 0
        let indexRight = 0
      
        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft][key] < right[indexRight][key]) {
              result.push(left[indexLeft])
              indexLeft++
            } else {
              result.push(right[indexRight])
              indexRight++
            }
          }
          return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }

