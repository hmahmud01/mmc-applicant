import React from 'react';
import ListModule from '../ListModule';

class WorkingExperience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                "experience": [{
                    "title": "Executive CB",
                    "organization": "National Treasure",
                    "duration": "2 years"
                },{
                    "title": "Chief Executive CB",
                    "organization": "National Treasure Chiriakhana",
                    "duration": "5 years 6 months"
                }]
            }
        }
    }
    render(){
        let experience = this.state.data.experience.map(function(item){
            return <ListModule title={item.title} key1="Organization" value1={item.organization} key2="Duration" value2={item.duration}  />         
        });
        return(
            <div>
                <h3>Working Experience</h3>
                <div class="row">
                    {experience}                    
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
            </div>
        )
    }
}

export default WorkingExperience;