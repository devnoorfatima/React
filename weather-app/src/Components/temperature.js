import React, {Component} from 'react';
import axios from 'axios';
class Temperature extends Component {
   state={
       weather:[]
   }
   componentDidMount() {
       
    axios.get('api.openweathermap.org/data/2.5/weather?lat='+this.props.lat+'&lon='+this.props.lon)
    .then(res=> this.setState({location:res.data}))
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
//   eb04322a785360de28790da75e8bf586
// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22 