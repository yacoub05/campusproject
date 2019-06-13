import React from 'react';

class NewStudent extends React.Component{
  render(){
    return  (
      <div>
      <h2>Student Name</h2>
      
        <form>
            First Name: 
            <input placeholder=" "></input>
            Last Name: 
            <input> </input>
            <submit>Add Student</submit>
        </form>
      
      </div>

    );
  }
}


export default NewStudent;