import React from 'react';
import axios from 'axios';
import { resolve } from 'dns';

class Home extends React.Component{
  constructor (props){
    super(props);
    this.state= {
      imageURL: 'https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif',
    }
  }
  // componentDidMount() { 
  //   axios.get('https://giphy.com/gifs/welcome-OkJat1YNdoD3W')
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  
  render(){
    
    return  (
      <div>

        <div class="card bg-dark text-white">
          <img src='picture.png' className="card-img" />
            <div class="card-img-overlay">
              
            <img src={this.state.imageURL}  width ='200px' height='200px'/>
            </div>

           <br/>
      
    </div>

    </div>
      
    );
    
  }
}


export default Home;
