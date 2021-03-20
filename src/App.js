import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import Statedata from './Components/Statedata';

class App extends Component{
  
 

  render(){
    return(
      <div className="container-fluid">
      

       <Header/>
       <India/>
       <Statedata/>

      
       
      </div>
    )
  }
}


export default App;
