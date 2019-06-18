import React from 'react';
import addNewStudent from './Student-component/addNewStudent';
// import deletestudent from './Student-component/deletestudent';
// import editstudent from './Student-component/editstudent';
// import StudentList from './Student-component/StudentList';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    console.log('inside component did mount');
    axios.get(`http://localhost:4000/students`)
      .then(res => {
        this.setState({ students: res.data })


        console.log(res.data);
      }).catch(err => console.log("Error from get request", err))
  }

  render() {
    //var addstudent = <addNewStudent />;
    return (
      <div>
        <h1>All Students</h1>
        <Link to="/Student-component/addNewStudent"> <button >
          Add Student
     </button></Link> 
        <Link to="/Student-component/deletestudent"> <button >
          Delete Student
     </button></Link> 
        {/* <Link to="/Student-component/editstudent"> <button >
          Edit Student
     </button></Link> */}
      </div>
    );
  }
}
export default Students;
