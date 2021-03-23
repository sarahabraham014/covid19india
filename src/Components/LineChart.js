import React , {Component} from 'react'
import { Line , defaults } from 'react-chartjs-2'
import Axios from 'axios';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

class LineChart extends Component {

    constructor(){
        super()
        this.state ={
            data : {}
        }
    }

    componentDidMount(){

        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data : response.data});
        });
    }




render(){
  return (
    <div className="mt-6">
    
      <Line
        data={{
          labels: [ 'Cases','Recovered', 'Active', 'Deaths'],
          datasets: [
            {
              label: 'No of Cases',
              data: [this.state.data.cases,this.state.data.recovered,this.state.data.active,this.state.data.deaths],
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
  )
}
}

export default LineChart;