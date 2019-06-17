import React from 'react';
import { Link } from 'react-router-dom';


class editstudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: ' ',
            lastname: ' ',
            Description: ' '

        };
    }

    // handlebutton = (e, value) => {
    //   e.preventDefault();
    //   // var fname = event.target.this.firstname;
    //   // console.log(this.props.item);
    // };
    handleChange = e => {
        this.setState({ 'firstname': e.target.value });



    };

    handleChange2 = e => {
        this.setState({ 'lastname': e.target.value });

    };




    render() {
        return (
            <div>
                <h2>Student Name</h2>

                <form>
                    First Name:
           <input value={this.state.firstname} placeholder="firstname " onChange={this.handleChange} />
                    Last Name:
           <input value={this.state.lastname} onChange={this.handleChange2} />
                    <Link to="/Students"> <button>Edit Student</button> </Link><br/>
                    <Link to="/Students"> <button>Back</button> </Link>

                </form>
                {/* <Dropdown title="Select Students" /> go to this link to see how to connect https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/ */}
            </div>

        );
    }
}


export default editstudent;