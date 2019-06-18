import React from 'react';

import axios from 'axios';


class CampusItem extends React.Component { 

  constructor(props){
    super(props);
  }

handleonDelete = (event) => {

  
    axios.delete('http://localhost:4000/campuses/'+this.props.id)
    .then( res => {
      
      this.props.updatelist();
    }).catch(err => console.log(err));
  }


 



  render(){

  
  
  return (
    <div>
      <div className="card text-white bg-dark mb-3 card-size" >
        <img class="card-img-top" ></img>

        <div class="card-body">
          <h5 class="card-title">{this.props.campusname} {" "}
            {this.props.lastname}</h5>
          <p class="card-text">College info</p>
          <button href="#" class="btn btn-secondary">Show campus</button> {" "}
          <button onClick={this.handleonDelete} href="#" class="btn btn-danger">Delete</button>

        </div>
      </div>

    </div>
    
  );
  }
  }
export default CampusItem;