import React from 'react';
import ListModule from '../ListModule';

class EducationalInformation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                "education": [{
                    "title": "Bachelors in Maramari",
                    "institute": "University of jhalkathi",
                    "score": "4/2.64"
                },{
                    "title": "Masters in Telespati",
                    "institute": "University of kushtia",
                    "score": "4/2.64"
                }]
            }
        }
    }
    render(){
        let education = this.state.data.education.map(function(item){
            return <ListModule title={item.title} key1="Institute" value1={item.institute} key2="Score" value2={item.date}  />         
        });
        return(
            <div>
                <h3>Educational Information</h3>
                <div class="row">                    
                    {education}
                </div>
            </div>
        )
    }
}

export default EducationalInformation;