import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class addNewCampuses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            campusname: ' ',

        };
    }

    handleChange = e => {
        this.setState({ 'campusname': e.target.value });
    };


    handleOnSubmit = (event) => {
        // alert(this.state.name + " you select " + this.state.language + " as your default programming language");
        let data = {
            campusname: this.state.campusname,

        }
        axios.post(`http://localhost:4000/addCampus`, data)
            .then(res => {


                console.log(res.data);
                console.log('hello there');

            });


    }
    render() {
        return (
            <div>
                <h2>Campus Name</h2>

                <form>
                    Campus Name:
            <input value={this.state.campusname} placeholder="campus name " onChange={this.handleChange} />


                    <Link to="/Campus"> <button onClick={this.handleOnSubmit}>Add Campus</button> </Link>

                </form>



            </div>
        );
    }
}
export default addNewCampuses;