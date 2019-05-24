import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, {} from "./../store";

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zipcode: reduxState.zipcode
            })
        }).catch(err => console.log(`Could not retrieve houses`, err))
    }

    handleChange( prop, val ) {
        this.setState({ [prop]: val });
    }

    addProperty() {

    }

    render() {
        return(
            <div className="container">
                <h1>Add New Listing</h1> <Link to="/"><button className="cancel-btn">Cancel</button></Link><br />
                <input className="propName" type="text" placeholder="" onChange={ (e) => this.handleChange ('name', e.target.value) } /><br />
                <input className="address" type="text" placeholder=""onChange={ (e) => this.handleChange ('address', e.target.value) } /><br />
                <input className="city" type="text" placeholder="" onChange={ (e) => this.handleChange ('city', e.target.value) } />
                <input className="state" type="text" placeholder="" onChange={ (e) => this.handleChange ('state', e.target.value) } />
                <input className="zip" type="text" placeholder="" onChange={ (e) => this.handleChange ('zipcode', e.target.value) } />
                
                <button className="complete-btn">Complete</button>
            </div>
        )
    }
}