import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
class addNewStudent extends React.Component {

   

  

  constructor(props) {
    super(props);
    this.state = {

      firstname: ' ',
      lastname: ' ',
      redirect: false,
      

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
    event.preventDefault();
    let data = {


      firstname: this.state.firstname,
      lastname: this.state.lastname
    }
    console.log("sending data")
    console.log(data)
    axios.post(`http://localhost:4000/addStudent`, data)
      .then(res => {

        console.log('This is the post  in the addnewStudent function');
        console.log(res.data);
        this.setState({ redirect: true })

      });

    

  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/Students" />
    }
    return (
      <div>
        <h2>Student Name</h2>
        
        <form onSubmit={this.handleOnSubmit}>
          First Name:
            <input class="input-sm" aria-label="Small" width="30%"value={this.state.firstname} placeholder="firstname " onChange={this.handleChange} /><br/>
          Last Name:
            <input class="input-sm  " aria-label="Small"value={this.state.lastname} onChange={this.handleChange2} /> <br/><br/>

          <button class="btn btn-secondary btn-sm btn-lg active">Add Student</button>
          


        </form>



      </div>

    );
  }
}


export default addNewStudent;