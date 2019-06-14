import React from 'react';
import { Link } from 'react-router-dom';

class addNewStudent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: ' ',
      lastname: ' '

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
          <Link to="/Students"> <button>Add Student</button> </Link>
        </form>

      </div>

    );
  }
}


export default addNewStudent;