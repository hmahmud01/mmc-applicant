import React from 'react';
import {Switch, Route} from "react-router-dom";

import Dashboard from '../Dashboard';
import JobList from '../JobList';
import UserProfile from '../UserProfile';

class RouterSwitch extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/joblist">
                    <JobList />
                </Route>
                <Route path="/userprofile">
                    <UserProfile />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        )
    }
}

export default RouterSwitch;