import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class addNewStudent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      firstname: ' ',
      lastname: ' '
    };
  }

  handleChange = e => {
    this.setState({ 'firstname': e.target.value });
  };
  handleChange2 = e => {
    this.setState({ 'lastname': e.target.value });

  };

  handleOnSubmit = (event) => {
    // alert(this.state.name + " you select " + this.state.language + " as your default programming language");
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname
    }
    axios.post(`http://localhost:4000/addStudent`, data)
      .then(res => {


        console.log(res.data);
        console.log('hello there');

      });


  }
  render() {
    return (
      <div>
        <h2>Student Name</h2>

        <form>
          First Name:
            <input value={this.state.firstname} placeholder="firstname " onChange={this.handleChange} />
          Last Name:
            <input value={this.state.lastname} onChange={this.handleChange2} />
          <Link to="/Students"> <button onClick={this.handleOnSubmit}>Add Student</button> </Link>

        </form>



      </div>
    );
  }
}
export default addNewStudent;





// Campus.js
