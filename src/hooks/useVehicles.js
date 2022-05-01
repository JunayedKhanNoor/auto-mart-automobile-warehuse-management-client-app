import { useEffect, useState } from "react";

const useVehicles =(query)=>{
    query = query || '';
    const [vehicles, setVehicles] = useState([]); 
    useEffect(()=>{
        let url;
        if (query) {
           url =`http://localhost:5000/vehicle?size=${query}`; 
        }else{
            url = `http://localhost:5000/vehicle`
        }
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setVehicles(data);
            console.log(data);
        })
    },[query])
    return [vehicles, setVehicles];
}
export default useVehicles;