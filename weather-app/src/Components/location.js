import {Component} from 'react';
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
        return
    }
  }
  export default Location;