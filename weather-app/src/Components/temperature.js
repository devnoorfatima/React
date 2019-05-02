import React, {Component} from 'react';
import axios from 'axios';
class Temperature extends Component {
   state={
       temperature:[]
   }

   componentDidMount() {
       axios.get("https://fcc-weather-api.glitch.me/api/current?lat="+this.props.lat+ "&lon="+this.props.lon)
       .then(res=> this.setState({temperature:res.data}))
   }
    render() {
        return (
            <div>
                <h2>{this.props.lon}</h2>
                <h2>{this.props.lat}</h2>
            </div>
        ) 
    }
  }
  export default Temperature;