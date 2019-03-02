import React, {Component} from 'react';
import './nt.css';
import logo from '../../assets/CRF Performance Line - Honda Powersports_files/honda-logo.png';
import Media from 'react-media';
import DropDownOne from './nt_drop_menu/nt_drop';


export default class NavbarTop extends Component{
    constructor(){
        super()
        this.state={
            hamburger:true
        }
    }

    handleHamburger(){
        this.setState({hamburger:!this.state.hamburger})
    }

    render(){
return(
    <div>
    <Media 
    query="(max-width: 799px)"
    render={()=>
        <div>
        {this.state.hamburger===true?
    <div className='top-nav'>
        <div className='nt-logo'>
            <img className='nt-img' src={logo} alt="Honda"/>
        </div>
        <div className="hamburger-wrapper" onClick={()=>{this.handleHamburger()}}>
        <div className="hamburger"></div>
        </div></div>:
        
        <div><div className='top-nav'>
        <div className='nt-logo'>
            <img className='nt-img' src={logo} alt="Honda"/>
        </div>
        <div className="hamburger-wrapper-active" onClick={()=>{this.handleHamburger()}}>
        <div className="hamburger-active"></div>
        </div>
    </div>
    <div className='nt-drop-down'>
    <DropDownOne/>
    </div>
    </div>
        }
        </div>
    }/>
    <Media 
    query="(min-width:800px)"
    render={()=>
    <div className='top-nav'>
        <div>
            <img className='nt-img' src={logo} alt="Honda"/>
        </div>
        <div className="nt-menu">
        <ul>
            <li><a className='a-nt' href='#gallery'>GALLERY</a></li>
            <li><a className='a-nt' href='#models'>MODELS</a></li>
            <li><a className='a-nt' href='#upcoming-events' >CURRENT OFFERS</a></li>
            <li><a className='a-nt' href="#stay-connected">STAY CONNECTED</a></li>
        </ul>
        <div className="nt-find-dealer-container">
        <img className='pin-drop' src='https://powersports.honda.com/images/Adventure/icons/pin-light.png' alt=''/>
            <span className="find-dealer">FIND DEALER</span>
        </div>
        </div>
    </div>
    }/>
    </div>
)
    }
}