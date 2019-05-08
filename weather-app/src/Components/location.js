import React, {Component} from 'react';
import axios from 'axios';
// import Temperature from './temperature'
class Location extends Component {
   state={
       location:[],
       temperature:[]
   }
   componentDidMount() {
       axios.get('https://geoip-db.com/json/')
       .then(res=> this.setState({location:res.data}))
       axios.get('api.openweathermap.org/data/2.5/weather?lat='+this.state.location.latitude+'&lon='+this.state.location.longitude)
       .then(res=> this.setState({temperature:res.data}))
   }

   
    render() {
        // const longitude= this.state.location.longitude;
        // const latitude = this.state.location.latitude;
        return (
            <div>
                <div className='align'>
                <h3 className='space'>{this.state.location.state}</h3>
                <h3>{this.state.location.city}</h3>
                </div>
                <h3>{this.state.location.country_name}</h3>
                {/* <Temperature
                 lat={latitude}
                 lon={longitude} /> */}
            </div>
        )
    }
  }
  export default Location;