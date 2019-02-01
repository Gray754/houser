import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value, id){
        this.setState({[id]:value})
    }

    render(){
        // console.log(this.state.name)
        return(
            <div>
                <h1>Wizard</h1>
                <Link to='/'><button>Cancel</button></Link>
                <input placeholder='name' onChange={e=>this.handleChange(e.target.value, 'name')}/>
                <input placeholder='address' onChange={e=>this.handleChange(e.target.value, 'address')}/>
                <input placeholder='city' onChange={e=>this.handleChange(e.target.value, 'city')}/>
                <input placeholder='state' onChange={e=>this.handleChange(e.target.value, 'state')}/>
                <input placeholder='zipcode' onChange={e=>this.handleChange(e.target.value, 'zipcode')}/>
            </div>
        )
    }
}

export default Wizard;