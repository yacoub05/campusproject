import React from 'react';
import CampusItem from './CampusItem';
import axios from 'axios';

class CampusList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      campusData: []
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:4000/campuses')
    .then( res => {
      console.log(res.data);
      this.setState({campusData: res.data});
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  forceRefresh = ()=>{
    console.log('hey');
    axios.get('http://localhost:4000/campuses')
    .then( res => {
      console.log(res.data);
      this.setState({campusData: res.data});
      console.log(res);
    })
    .catch(err => console.log(err));

  }

  render() {
      const campusItems = this.state.campusData.map((object) => {
     
      return <CampusItem updatelist ={this.forceRefresh} key={'campus'+object.id} {...object} />;
    });

    return( <div>
    
    {campusItems}
   

    </div>);
   
    
  }
   
}


  export default CampusList;