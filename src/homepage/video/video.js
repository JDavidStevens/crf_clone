import React, { Component } from 'react';
import './video.css';
import ReactPlayer from 'react-player';
import Media from 'react-media';
import PerformanceLine from '../../assets/CRF Performance Line - Honda Powersports_files/CRFPerformanceLine.jpg'

export default class Video extends Component {
    render() {
        return (
            <div className="video-page">
                <Media query="(max-width:699px)"
                render={()=>
                <div className='performance-line-wrapper'>
                    <img className='performance-line-image'  
                    src={PerformanceLine}
                    alt='Hello!'/>
                </div>
                }/>
                <Media
                    query="(min-width:700px)"
                    render={() =>
                        <div className='video-wrapper'>
                            <ReactPlayer
                                className='video'
                                url='https://player.vimeo.com/video/271191217?background=true'
                                loop={true}
                                playing={true}
                                width='100%'
                                height='100%'
                                controls={false}
                            />
                        </div>} />
                <div>
                    <h3 className='video-h3'>The 2019 Honda CRF Performance Line</h3>
                    <h2 className='video-h2'>WINNING STARTS HERE.</h2>
                    <p className='video-paragraph'>Humans love to perform at a high level. We love competition. Who can run the fastest. Which team can score the most. And when it comes to powersports, the competition is fierce. Motocross, enduro, GNCC, hare and hounds, desert racing, or just riding with your pals and seeing who can get to the top of that hill first. This year Honda’s CRF performance lineup is stronger than ever, with new bikes, new features, and one overriding goal: Winning.</p>
                    <button className='video-button'><a href='#models' className='video-button-link'>VIEW MODELS</a></button>
                </div>
            </div>
        )
    }
}