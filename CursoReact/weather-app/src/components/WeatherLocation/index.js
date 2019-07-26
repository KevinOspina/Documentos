import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import{
    SUN,
} from './../../constants/weather'

const data= {
    temperature:5,
    weatherState: SUN,
    humidity:10,
    wind:'10 m/s',
}
class WeatherLocation extends Component {

    constructor(){
        super()
        this.state = {
            city: 'Medellín',
            data: data, 
        }
    }

    handleUpdateClick = () =>{
        console.log("Actualizado")
    }
    render(){

        return (<div className="weatherLocation"> 
                      <Location city = {this.state.city}/> 
                      <WeatherData data ={this.state.data}/>
                      <button onClick={this.handleUpdateClick}>Actualizar</button>
                 </div>  //Arrow function)
        )
    }
    
    
}

export default WeatherLocation;