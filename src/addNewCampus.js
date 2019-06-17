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
                <h2>NEW CAMPUS FORM</h2>

                <form>
                    <div className="form-group">
                        <label for="entername">Enter Campus Name</label>
                        <input type="text" class="form-control" id="campus-name" aria-describedby="emailHelp" />
                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                        <div class="form-group">
                            <label for="numberofstudent">Number of Student</label>
                            <input type="number" class="form-control" id="number" />
                            </div>
                    <div class="form-group">
                        <label for="picturelink">Enter picture link</label>
                        <input type="link" class="form-control" id="picture-link" />
                    </div>

                    <Link to="/Campus"><button type="submit" class="btn btn-dark">Add Campus</button> </Link> 
                </form>

            </div>
        );
    }

}

export default addNewCampus;