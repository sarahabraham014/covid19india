import React, { useEffect, useState } from 'react'
import Axios from 'axios'

let Dropdownstate = () =>{
   let [stateData,setStateData]=useState(null)
   let [selectedState,setSelectedState]=useState(null)
    useEffect(()=>{
     
    Axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            setStateData(response.data);
            
    });
    },[])
    
    

    let keys = stateData && Object.keys(stateData);

return <div>

<label for="state">Choose a state</label>

<select name="state" onChange={(e)=>{
    setSelectedState(e.target.value)
    console.log(e.target.value);
}} id="stateInput">
 
    {keys && keys.map((key,id)=>{
        return <option value={id}>{key}</option>

    })}

 </select>
 
     <div>

    { stateData && stateData[selectedState].districtData}

     </div>

 
         
        
    </div>
}

export default Dropdownstate;