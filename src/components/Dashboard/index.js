import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import EducationalInformation from './components/EducationalInformation';
import PersonalInformation from './components/PersonalInformation';
import Training from './components/Training';
import WorkingExperience from './components/WorkingExperience';
import References from './components/References';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    render(){
        return(
            <div class="main-panel" id="main-panel">
                <Header />

                <div class="panel-header panel-header-sm">
                </div>
                <div class="content">
                    <div class="row">
                    <div class="col-md-8">
                        <div class="card">
                        <div class="card-header">
                            <h5 class="title">User information</h5>
                        </div>
                        <div class="card-body">
                            <PersonalInformation />
                            <hr />
                            <EducationalInformation />
                            <hr />
                            <Training />
                            <hr />
                            <WorkingExperience />
                            <hr />
                            <References />
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-user">
                            <div class="image">
                                <img src="../assets/img/bg5.jpg" alt="..." />
                            </div>
                            <div class="card-body">
                                <div class="author">
                                <a href="#">

                                    <img class="avatar border-gray" src="../assets/img/pac.png" alt="..." />
                                    <h5 class="title">TERMINATOR</h5>
                                </a>
                                <p class="description">
                                    Software Engineer @ Weaver
                                </p>
                                <a href="">Download My CV</a>
                                </div>
                            </div>
                            <hr />
                            <div class="button-container">
                                <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                                <i class="fab fa-facebook-f"></i>
                                </button>
                                <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                                <i class="fab fa-twitter"></i>
                                </button>
                                <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                                <i class="fab fa-google-plus-g"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;