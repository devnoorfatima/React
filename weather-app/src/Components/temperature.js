import React, {Component} from 'react';
import axios from 'axios';
class Temperature extends Component {
   state={
       temperature:[]
   }
   componentDidMount() {
       
    axios.get('https://fcc-weather-api.glitch.me/api/current?lat='+'&lon=')
    .then(res=> this.setState({temperature:res.data}))
}

render() {
        
        return (
            <div>
                
                {/* <h2>{this.state.weather.main.temp}</h2> */}
            </div>
        ) 
    }
  }
  export default Temperature;
