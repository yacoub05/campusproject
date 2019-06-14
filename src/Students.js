import React from 'react';
import addNewStudent from './addNewStudent';
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
        <Link to="/addNewStudent"> <button >
          Add Student
     </button></Link>
      </div>
    );
  }
}
export default Students;
