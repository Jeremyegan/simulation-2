import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import House from './House';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log(`Could not retrieve houses`, err))
    }

    addHouse() {
        axios.post('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log(`Couldn't create new property`, err))
    }

    handleChange( prop, val ) {
        this.setState({ [prop]: val })
    }

    render() {
        let houses = this.state.houses.map((houses, i) => {
            return(
                <House key={ i } house={ houses } />
            )
        })
        return(
            <div> 
                <House />
                { houses }
                <input onChange={e => this.handleChange(e.target.value)}></input>
                <Link to="/wizard"><button onClick={this.addHouse}>Add New Property</button></Link>
            </div>
        )
    }
}