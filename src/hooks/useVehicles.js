import { useEffect, useState } from "react";

const useVehicles =(query)=>{
    query = query || '';
    const [vehicles, setVehicles] = useState([]); 
    useEffect(()=>{
        let url;
        if (query) {
           url =`https://morning-ridge-10289.herokuapp.com/vehicle?size=${query}`; 
        }else{
            url = `https://morning-ridge-10289.herokuapp.com/vehicle`
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