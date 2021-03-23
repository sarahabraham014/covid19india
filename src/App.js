import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import PieChart from './Components/piechart';
import BarChart from './Components/barchart';
import LineChart from './Components/linechart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component{
  
 

  render(){
    return(
      <Router>
      <div className="container-fluid ">
      
      <div className=" ">
      <Header/>
      </div>
       
       
         <Switch>
           <Route exact path="/">
             <India/>
           </Route>
           <Route path="/india">
             <India/>
           </Route>
           <Route path="/piechart">
             <div className="mt-5 align-items-center justify-content-center text-center">
              <PieChart/>
             </div>
             
           </Route>
           <Route path="/barchart">
           <div className="mt-5 align-items-center justify-content-center text-center">
              <BarChart/>
             </div>
           </Route>

           <Route path="/linechart">
             <div className="mt-5 align-items-center justify-content-center text-center">
              <LineChart/>
             </div>
           </Route>
           
         </Switch>
       
       
      
       
      </div>
      </Router>
    )
  }
}


export default App;
