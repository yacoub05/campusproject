import React from 'react';
import addNewCampus from './addNewCampus';
import showCampus from './showCampus';
import editCampus from './editCampus';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Campus extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      Campus: []
    };
  }
  
  componentDidMount() {
    console.log('inside component did mount');
    axios.get(`http://localhost:4000/campuses`)
      .then(res => {
        this.setState({ campuses: res.data })


        console.log(res.data);
      }).catch(err => console.log("Error from get request", err))
  }
  
  render(){
    return  (
      <div>
      <h1>All Campuses</h1>
        <Link to="/addNewCampus"> <button >Add Campus</button></Link>
      <Link to="/showCampus"><button>Show Campus</button></Link> 
      <Link to="/editCampus"><button>Edit Campus</button></Link>
      <form>
        </form>      
      </div>

    );
  }
}


export default Campus;
