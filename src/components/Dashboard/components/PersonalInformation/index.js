import React from 'react';

class PersonalInformation extends React.Component{
    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default PersonalInformation;