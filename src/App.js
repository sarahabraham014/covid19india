import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import Dropdownstate1 from './Components/dropdownstate copy';


class App extends Component{
  
 

  render(){
    return(
     
      <div className="container-fluid ">
      
      <div className=" ">
      <Header/>
      </div>
      
      <div className=" ">
      <India/>
      </div>

      <div>
      <Dropdownstate1 />
      </div>
       
       
      </div>
     
    )
  }
}


export default App;
