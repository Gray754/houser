import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'

class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            houses: []
        }
    }

    getData(){
        
    }

    render(){
        let {houses} = this.state
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard'><button>Add New Property</button></Link>
                {houses.map((e,i)=><House/>)}
            </div>
        )
    }
}


export default Dashboard;