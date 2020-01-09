import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Dashboard extends React.Component{
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
                            <h3>Personal Information</h3>
                            <div class="row">                    
                                <div class="col-md-6 pr-1">
                                <div class="form-group">
                                    <label>Full name</label>
                                    <p class="lead">Mike Hawlader</p>                      
                                </div>
                                </div>                    
                                <div class="col-md-6 pl-1">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <p class="lead">+8801211221133</p>                        
                                </div>
                                </div>
                                <div class="col-md-6 pr-1">
                                <div class="form-group">
                                    <label>Email</label>
                                    <p class="lead">email@email.com</p>                        
                                </div>
                                </div>
                            </div>
                            <hr />
                            <h3>Educational Information</h3>
                            <div class="row">                    
                                <div class="col-md-12 pr-1">
                                <div class="form-group">
                                    <label>Degree name</label>
                                    <p class="lead">Bachelors in Maramari</p>                      
                                    <ul>
                                    <li>Institute: University of jhalkathi</li>
                                    <li>Score: 4/2.64</li>
                                    </ul>
                                </div>
                                </div>   
                                <div class="col-md-12 pr-1">
                                    <div class="form-group">
                                    <label>Degree name</label>
                                    <p class="lead">Masters in Telespati</p>                      
                                    <ul>
                                        <li>Institute: University of kushtia</li>
                                        <li>Score: 4/2.64</li>
                                    </ul>
                                    </div>
                                </div>                  
                            </div>
                            <hr />
                            <h3>Working Experience</h3>
                            <div class="row">                    
                                <div class="col-md-12 pr-1">
                                <div class="form-group">
                                    <label>Designation</label>
                                    <p class="lead">Executive CB</p>                      
                                    <ul>
                                    <li>Organization: National Treasure</li>
                                    <li>Duration: 2 years</li>
                                    </ul>
                                </div>
                                </div>   
                                <div class="col-md-12 pr-1">
                                    <div class="form-group">
                                    <label>Designation</label>
                                    <p class="lead">Chief Executive CB</p>                      
                                    <ul>
                                        <li>Organization: National Treasure Chiriakhana</li>
                                        <li>Duration: 5 years 6 months</li>
                                    </ul>
                                    </div>
                                </div>                 
                            </div>
                            <hr />
                            <h3>Reference</h3>
                            <div class="row">                    
                                <div class="col-md-12 pr-1">
                                <div class="form-group">                        
                                    <p class="lead">Shabnur</p>                      
                                    <ul>
                                    <li>Cheap Actress</li>
                                    <li>shabnur@dcc.com</li>
                                    </ul>
                                </div>
                                </div>   
                                <div class="col-md-12 pr-1">
                                <div class="form-group">                        
                                    <p class="lead">Superman Rubel</p>                      
                                    <ul>
                                        <li>Cheap Actor</li>
                                        <li>rubel@dcc.com</li>
                                    </ul>
                                </div>
                                </div>                
                            </div>
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