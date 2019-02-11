import React, {Component} from 'react';
import './events.css';


export default class Events extends Component{

    render(){
return(
    <div className='events'>
    <div className='events-bg'>
    <div className='events-overlay'>
    <h2 className='events-h2'>RACES AND EVENTS</h2>
    <button className='events-button'>VIEW UPCOMING EVENTS</button>
    </div>
    </div>
    </div>
)
    }
}