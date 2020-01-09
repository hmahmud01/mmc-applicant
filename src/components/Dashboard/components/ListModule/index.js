import React from 'react';

class ListModule extends React.Component{
    render(){
        return(
            <div class="col-md-12 pr-1">
                <div class="form-group">  
                    <p class="lead">{this.props.title}</p>                      
                    <ul>
                        <li>{this.props.key1}: {this.props.value1}</li>
                        <li>{this.props.key2}: {this.props.value2}</li>
                    </ul>
                </div>
            </div> 
        )
    }
}

export default ListModule;