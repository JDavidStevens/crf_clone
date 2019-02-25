import React from 'react';
import './nt_drop.css';

export default function DropDownOne(){
    return(
        <div className="nt-drop-down">
        <div className='ntdd-dealer-container'><div className='ntdd-dealer'>
        <img className='ntdd-pin-drop' src='https://powersports.honda.com/images/Adventure/icons/pin-light.png' alt=''/>
        <span className='ntdd-span'>FIND DEALER</span>
        </div></div>
<ul className='ntdd-menu'>
<a className='ntdd-a' href="#gallery"><div className="ntdd-menu-item" href='#models'><li className='ntdd-li'>GALLERY</li><i className='ntdd-i ntdd-arrow'></i></div></a>
    <a className='ntdd-a' href='#models'><div className="ntdd-menu-item"><li className='ntdd-li'>MODELS</li><i className='ntdd-i ntdd-arrow'></i></div></a>
    <a className='ntdd-a' href='#upcoming-events'><div className="ntdd-menu-item"><li className='ntdd-li'><a className='ntdd-a'>UPCOMING EVENTS</a></li><i className='ntdd-i ntdd-arrow'></i></div></a>
    <a className='ntdd-a' href='#stay-connected'><div className="ntdd-menu-item"><li className='ntdd-li'><a className='ntdd-a'>STAY CONNECTED</a></li><i className='ntdd-i ntdd-arrow'></i></div></a>
</ul>
        </div>
    )
}