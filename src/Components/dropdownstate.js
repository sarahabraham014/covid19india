import React, { useEffect, useState } from 'react'
import Axios from 'axios'


let Dropdownstate = (props) => {
    let [stateData, setStateData] = useState(null)
    useEffect(() => {
        
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            setStateData(response.data);

        });
    }, []);
    let keys = stateData && Object.keys(stateData);
    return <div>
        <label for="state">Choose a state</label>
        <select value={props.state} name="state" onChange={(e) => {
            props.selectState(e.target.value);
        }}>
            {keys && keys.map((key, id) => {
                return <option key={id} value={key}>{key}</option>

            })}
        </select>
    </div>
    
}

export default Dropdownstate;



