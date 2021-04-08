import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Bar, defaults } from 'react-chartjs-2'
import { Line  } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'

let Dropdownstate1 = () =>{
    let [stateData,setStateData]=useState(null)
    let [selectedState,setSelectedState]=useState(null)
    let [totalActiveCases,setTotalActiveCases]=useState(0)
    let [totalRecoveredCases,setTotalRecoveredCases]=useState(0)
    let [totalConfirmedCases,setTotalConfirmedCases]=useState(0)
    let [totalDeathsCases,setTotalDeathsCases]=useState(0)

    let dataselected;
    useEffect(()=>{
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            setStateData(response.data);
            dataselected=response.data.Assam.districtData
        });
    },[])
    useEffect(()=>{
        if(selectedState){
            // selectedState.forEach(district => {
            //     console.log(district)
            // });
            let keys = Object.keys(selectedState)
            setTotalActiveCases(0)
            setTotalRecoveredCases(0)
            setTotalConfirmedCases(0)
            setTotalDeathsCases(0)
            console.log(keys);
            if(keys[0]==='Unassigned') {
              let activeCases = 0;
              let recoveredCases = 0;
              let confirmedCases = 0;
              let deceasedCases = 0;
              Object.values(stateData).reduce((total,{districtData})=>{
                  Object.values(districtData).reduce((perStateTotal,{active,recovered,confirmed,deceased})=>{
                    console.log(active,recovered,confirmed,deceased);
                    activeCases += active;
                    recoveredCases += recovered;
                    confirmedCases += confirmed;
                    deceasedCases += deceased;
                  })
                })
                setTotalActiveCases(activeCases)
                setTotalRecoveredCases(recoveredCases)
                setTotalConfirmedCases(confirmedCases)
                setTotalDeathsCases(deceasedCases)
                    
                  // setTotalActiveCases(totalActiveCases+Math.abs(selectedState[key].active))
                  // setTotalRecoveredCases(totalRecoveredCases+Math.abs(selectedState[key].recovered))
                  // setTotalConfirmedCases(totalConfirmedCases+Math.abs(selectedState[key].confirmed))
                  // setTotalDeathsCases(totalDeathsCases+Math.abs(selectedState[key].deceased))
            }else{
              console.log("in else");
              setTotalActiveCases(0)
              setTotalRecoveredCases(0)
              setTotalConfirmedCases(0)
              setTotalDeathsCases(0)
              console.log(totalActiveCases);
              let activeCases = 0;
              let recoveredCases = 0;
              let confirmedCases = 0;
              let deceasedCases = 0;
              keys.forEach(key =>{
                
                activeCases+=Math.abs(selectedState[key].active)
                recoveredCases+=Math.abs(selectedState[key].recovered)
                confirmedCases+=Math.abs(selectedState[key].confirmed)
                deceasedCases+=Math.abs(selectedState[key].deceased)
                  
              })
              setTotalActiveCases(activeCases)
              setTotalRecoveredCases(recoveredCases)
              setTotalConfirmedCases(confirmedCases)
              setTotalDeathsCases(deceasedCases)
            }
            console.log(selectedState);
        }
    },[selectedState])
    let keys = stateData && Object.keys(stateData);

    
    return (
        <>
            <div>
                <label for="state">Choose a state</label>
                <select 
                    name="state" 
                    onChange={(e)=>{
                        setSelectedState(stateData[e.target.value].districtData)
                        
                        
                        console.log(parseInt(e.target.value));
                        console.log(stateData);
                    }}
                    id="stateInput"
                >
                    {
                        keys && keys.map((key,id)=>{
                            return <option value={key}>{id===0? "India" : key}</option>
                        })
                    }
                </select>
            </div>
            {
              totalActiveCases &&  <div>
                    <p>Confirmed : {totalConfirmedCases}</p>
                    <p>Active : {totalActiveCases}</p>
                    <p>Recovered : {totalRecoveredCases}</p>
                    <p>Deaths : {totalDeathsCases}</p>
                </div>
            }
           
           <div className = "mt-6 d-flex align-items-center justify-content-center text-center ">
      <Bar
        data={{
          labels: ['Cases', 'Recovered', 'Active', 'Deaths'],
          datasets: [
            {
              label: 'Cases' ,
              data: [totalConfirmedCases,totalRecoveredCases,totalActiveCases,totalDeathsCases],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(30, 100, 100, 1)',
               
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                
              ],
              borderWidth: 1,
            },
            
          ],
        }}
        height={400}
        width={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>

    <div className="mt-6">
    
    <Line
      data={{
        labels: [ 'Cases','Recovered', 'Active', 'Deaths'],
        datasets: [
          {
            label: 'No of Cases',
            data: [totalConfirmedCases,totalRecoveredCases,totalActiveCases,totalDeathsCases],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 100, 100, 1)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
         
        ],
      }}
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }}
    />
  </div>

  <div className="mt-10">
      <Pie
        data={{
          labels: [ 'Cases','Recovered', 'Active', 'Deaths'],
          datasets: [
            {
              label: 'No of Cases',
              data: [totalConfirmedCases,totalRecoveredCases,totalActiveCases,totalDeathsCases],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(30, 100, 100, 1)',
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
           
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>


        </>
    )
}

export default Dropdownstate1;