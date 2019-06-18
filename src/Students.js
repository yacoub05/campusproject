import React from 'react';
import addNewStudent from './Student-component/addNewStudent';
import { Link } from 'react-router-dom';
import StudentList from './Student-component/StudentList';
import StudentItem from './Student-component/StudentItem';
import axios from 'axios';

class Students extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }



  render() {
    //var addstudent = <addNewStudent />;
    return (
      <div>
        <div class="form-group">
        <h1>Students</h1>
        <Link to="/Student-component/addNewStudent"> <button class="btn btn-secondary">
          Add Student
      </button></Link> <br/>
        </div>
        


        <StudentList students={this.state.students} />





      </div>

    );
  }
}


export default Students;