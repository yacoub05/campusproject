import React from 'react';
import addNewCampus from './addNewCampus';
import {Link} from 'react-router-dom';


class Campus extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      Campus: []
    };
  }
  
  render(){
    return  (
      <div>
      <h1>All Campuses</h1>
        <Link to="/addNewCampus"> <button >
            Add Campus
      </button></Link>
      
      </div>

    );
  }
}


export default Campus;
