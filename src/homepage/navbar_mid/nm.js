import React, { Component } from 'react';
import './nm.css';
import Media from 'react-media';
import DotMenu from './dot_menu/dot_menu';


export default class NavbarMid extends Component {
constructor(){
    super()
    this.state={
        dotMenu:true
    }
}

handleDotMenu(){
    this.setState({dotMenu:!this.state.dotMenu})
}
    render() {
        return (
        <div>
            <Media 
            query="(max-width: 799px)"
            render={()=>
                <div>
                    {this.state.dotMenu?
                <div className='nm'>
                <div className='dot-box' onClick={()=>{this.handleDotMenu()}}>
                <img className='dots' src='https://powersports.honda.com/images/Adventure/icons/subnav-icon.png' alt=''/>
                </div>
            </div>
            :
            <div>
            <div className='nm'>
                <div className='dot-box' onClick={()=>{this.handleDotMenu()}}>
                <img className='dots' src='https://powersports.honda.com/images/Adventure/icons/subnav-icon.png' alt=''/>
                </div>
            </div>
            <div className='dot-dd'>
          <ul className='dot-dd-ul'>
              <a className='dot-dd-a' href='#gallery'><li className='dot-dd-li' onClick={()=>{this.handleDotMenu()}}>GALLERY</li></a>
              <a className='dot-dd-a' href='#models'><li className='dot-dd-li' onClick={()=>{this.handleDotMenu()}}>MODELS</li></a>
              <a className='dot-dd-a' href='#upcoming-events'><li className='dot-dd-li' onClick={()=>{this.handleDotMenu()}}>UPCOMING EVENTS</li></a>
          </ul>  
        </div>
            </div>
        }
            </div>
            }/>
            <Media
            query='(min-width: 800px)'
            render={()=>
            <div className='nm'>
                <ul className='nm-ul'>
                <div className='gallery-link'>
                    <li className='nm-li'><a className='gallery-a' href='#gallery'>GALLERY</a></li>
                    <hr></hr>
                </div>
                <div className='gallery-link'>
                    <li className='nm-li'><a className='models-a' href='#models'> MODELS</a></li>
                    <hr></hr>
                </div>
                    <div className='gallery-link'>
                    <li className='nm-li'><a className='events-a' href='#upcoming-events'>UPCOMING EVENTS</a></li>
                    <hr className='hr-long'></hr>
                </div>
                </ul>
            </div>
            }/>
            </div>
        )
    }
}