import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';


export default class routes {
    render() {
        return (
            <div>
            <Switch>
                <Route component={Dashboard} path="/" />
                <Route component={Wizard} path="/wizard" />
            </Switch>
            </div>

        )
    }
}