import React from 'react';
import './dot_menu.css';

export default function DotMenu(){
    return(
        <div className='dot-dd'>
          <ul>
              <a href='#gallery'><li>GALLERY</li></a>
              <a href='#models'><li>MODELS</li></a>
              <a href='#upcoming-events'><li>UPCOMING EVENTS</li></a>
          </ul>  
        </div>
    )
}