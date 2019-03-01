import React, {Component} from 'react';
import './intro.css';
import {Link} from 'react-router-dom';

export default class Intro extends Component{
    render(){
        return(
<div className='intro'>
    <p className='intro-p'>Hello!</p>
    <Link to="/main" className="enter">Enter</Link>
</div>
        )
    }
}