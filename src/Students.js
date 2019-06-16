import React from 'react';
import addNewStudent from './Student-component/addNewStudent';
import deletestudent from './Student-component/deletestudent';
import editstudent from './Student-component/editstudent';
import { Link } from 'react-router-dom';
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
        <h1>All Students</h1>
        <Link to="/Student-component/addNewStudent"> <button >
          Add Student
     </button></Link>
        <Link to="/Student-component/deletestudent"> <button >
          Delete Student
     </button></Link>
        <Link to="/Student-component/editstudent"> <button >
          Edit Student
     </button></Link>
      </div>
    );
  }
}
export default Students;
