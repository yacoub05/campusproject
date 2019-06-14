import React from 'react';
import {Link} from 'react-router-dom';

class addNewCampus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        campusName: ''
        };
    }

    handleChange = e => {
         this.setState({ 'campusName': e.target.value 
         });
    }
    render(){
        return (
            <div>
                <h2>Enter Campus Name</h2>
                <form>
                    Campus Name:
                    <input value={this.state.campusName} placeholder="campusName " onChange ={this.handleChange}/>
                    <Link to = "/Campus"><button>Add Campus</button></Link>
                </form>
            </div>
        );
    }

}

export default addNewCampus;