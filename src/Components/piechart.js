import React , {Component} from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import Axios from 'axios';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

class PieChart extends Component {

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
    <div>
      <Pie
        data={{
          labels: [ 'Active', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'No of Cases',
              data: [this.state.data.active,this.state.data.recovered,this.state.data.deaths],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
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

export default PieChart;