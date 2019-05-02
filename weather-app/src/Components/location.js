import React, {Component} from 'react';
import axios from 'axios';
class Location extends Component {
   state={
       location:[]
   }
   componentDidMount() {
       axios.get('https://geoip-db.com/json/')
       .then(res=> this.setState({location:res.data}))
   }
    render() {
        return (
            <div>
                <div className='align'>
                <h3 className='space'>{this.state.location.state}</h3>
                <h3>{this.state.location.city}</h3>
                </div>
                <h3>{this.state.location.country_name}</h3>
                
            </div>
        )
    }
  }
  export default Location;