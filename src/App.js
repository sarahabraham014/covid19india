import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import PieChart from './Components/PieChart';


class App extends Component{
  
 

  render(){
    return(
      
      <div className="container-fluid">
     
     <Header/>
    <India/>
    <PieChart/>   

      </div>
    )
  }
}

export default App;