import React from 'react';
import addNewCampuses from './addNewCampuses';

import { Link } from 'react-router-dom';
import CampusList from './CampusList';
import axios from 'axios';

class Campus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campuses: []
    };
  }



  render() {
    //var addstudent = <addNewStudent />;
    return (
      <div>
        <h1>All Campuses</h1>
        <Link to="/addNewCampuses"> <button >
          Add Campus
     </button></Link>

        <CampusList campus={this.state.campuses} />





      </div>

    );
  }
}


export default Campus;