import React from 'react';
import axios from 'axios';

class Home extends React.Component{
  constructor (props){
    super(props);
    this.state= {
      imageURL: 'https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif'
    }
  }
  componentDidMount() { 
    axios.get('https://giphy.com/gifs/welcome-OkJat1YNdoD3W')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render(){
    
    return  (
      <div>

      <h1>Feel free to roam around</h1>


      <img src={this.state.imageURL} />
      
      </div>
      
    );
    
  }
}


export default Home;
