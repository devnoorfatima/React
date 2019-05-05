import React, {Component} from 'react';
import axios from 'axios';
class Temperature extends Component {
   state={
       weather:[]
   }

   componentDidMount() {
       let latitude = this.props.lat;
       let longitude = this.props.lon;

       axios.get('https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude)
       .then(res=> this.setState({weather:res.data}))
   }
    render() {
        return (
            <div>
                {/* <h2>{this.props.lon}</h2>
                <h2>{this.props.lat}</h2> */}
                {/* <h2>{this.state.weather.main.temp}</h2> */}
            </div>
        ) 
    }
  }
  export default Temperature;