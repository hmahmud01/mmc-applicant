import React from 'react';
import {Link } from "react-router-dom";

class SideNav extends React.Component{
    render(){
        return(
            <div class="sidebar" data-color="orange">
                <div class="logo">
                    <a href="#" class="simple-text logo-normal">
                    Applicant Dashboard
                    </a>
                </div>
                <div class="sidebar-wrapper" id="sidebar-wrapper">
                    <ul class="nav">
                    <li class="active">
                        <Link to="/"><i class="now-ui-icons design_app"></i>
                        <p>Dashboard</p></Link>
                    </li>
                    <li>
                        <Link to="/userprofile"><i class="now-ui-icons design_app"></i>
                        <p>User Profile</p></Link>
                    </li>
                    <li>
                        <Link to="/joblist"><i class="now-ui-icons users_single-02"></i>
                        <p>Job List</p></Link>
                    </li>
                    <li class="active-pro">
                        <Link to="/"><i class="now-ui-icons arrows-1_cloud-download-93"></i>
                        <p>Application</p></Link>
                    </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideNav;