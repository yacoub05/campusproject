import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
class addNewCampuses extends React.Component {



    constructor(props) {
        super(props);
        this.state = {

            campusname: ' ',

            redirect: false

        };
    }


    handleChange = e => {
        this.setState({ 'campusname': e.target.value });
    };







    handleOnSubmit = (event) => {
        // alert(this.state.name + " you select " + this.state.language + " as your default programming language");
        event.preventDefault();
        let data = {
            campusname: this.state.campusname,

        }
        console.log("sending data")
        console.log(data)
        axios.post(`http://localhost:4000/addCampus`, data)
            .then(res => {

                console.log('This is the post  in the addnewCampus function');
                console.log(res.data);
                this.setState({ redirect: true })

            });



    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/Campus" />
        }
        return (
            <div>
                <h2>Campus Name</h2>

                <form onSubmit={this.handleOnSubmit}>
                    Campus Name:
            <input value={this.state.campusname} placeholder="firstname " onChange={this.handleChange} />


                    <button>Add Campus</button>
                    {/* <button>Add Student</button>  */}


                </form>



            </div>

        );
    }
}


export default addNewCampuses;