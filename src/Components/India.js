import React , {Component} from 'react';
import {Card} from 'react-bootstrap';

import Axios from 'axios';

class India extends Component{

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
        return(
            <div className="row">
                
                <div className="col-md-12">
        

                    <div className="row my-4">

                        <div className="col-md-3">
                        
                        <Card className="badge badge-info" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                        <Card.Title>TOTAL CASES</Card.Title>
                        <h3>{this.state.data.cases}</h3>
                        <Card.Text>
                          
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                        <Card.Title>ACTIVE</Card.Title>
                        <h3>{this.state.data.active}</h3>
                        <Card.Text>
                          
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                        <Card.Title>RECOVERED</Card.Title>
                        <h3>{this.state.data.recovered}</h3>
                        <Card.Text>
                          
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-3">
                        <Card className="badge badge-info" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                        <Card.Title>DEATHS</Card.Title>
                        <h3>{this.state.data.deaths}</h3>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                        
                        
                    </div>

                </div>

                

               </div>
           
           
        )
    }
}

export default India;