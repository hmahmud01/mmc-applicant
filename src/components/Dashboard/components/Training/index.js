import React from 'react';

import ListModule from '../ListModule';

class Training extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                "training": [{
                    "title": "Android Development",
                    "institute": "Android Development School",
                    "date": "20/12/19"
                },{
                    "title": "Php Development",
                    "institute": "Php development School",
                    "date": "20/12/12"
                }]
            }
        }
    }
    render(){
        let training = this.state.data.training.map(function(item){
            return <ListModule title={item.title} key1="Institute" value1={item.institute} key2="Date" value2={item.date}  />         
        });

        return(
            <div>
                <h3>Training</h3>
                <div class="row">     
                    {training}               
                </div>
            </div>
        )
    }
}

export default Training;