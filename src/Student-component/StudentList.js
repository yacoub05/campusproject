import React from 'react';
import StudentItem from './StudentItem';
import axios from 'axios';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students')
      .then(res => {
        console.log(res.data);
        this.setState({ studentData: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  forceRefresh = () => {
    console.log('hey');
    axios.get('http://localhost:4000/students')
      .then(res => {
        console.log(res.data);
        this.setState({ studentData: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));

  }

  render() {
    const studentItems = this.state.studentData.map((object) => {

      return <StudentItem updatelist={this.forceRefresh} key={'student' + object.id} {...object} />;
    });

    return (<div>

      {studentItems}


    </div>);


  }

}


export default StudentList;