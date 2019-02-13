import React, { Component } from 'react';
import './lineup.css';

export default class Lineup extends Component {
    render() {
        return (
            <div className='lineup-wrapper' id='gallery'>
                <div>
                    <h3 className='lineup-h3'>The Honda CRF Performance Line</h3>
                    <h2 className='lineup-h2'>GALLERY</h2>
                </div>
                <div className='image-wrapper'>
                    <div className='CRF450RX-container'>
                        <div className='CRF450RX-bg'>
                        </div>
                        <span className="model-CRF450RX">CRF450RX</span>
                    </div>
                    <div className='CRF250R-container'>
                        <div className='CRF250R-bg'>
                        </div>
                        <span className='model-CRF250R'>CRF250R</span>
                    </div>
                    <div className='CRF450L-container'>
                        <div className='CRF450L-bg'>
                        </div>
                        <span className='model-CRF450L'>CRF450L</span>
                    </div>
                    <div className='CRF250RX-container'>
                        <div className='CRF250RX-bg'>
                        </div>
                        <span className='model-CRF250RX'>CRF250RX</span>
                    </div>
                    <div className='CRF450X-container'>
                        <div className='CRF450X-bg'>
                        </div>
                        <span className='model-CRF450X'>CRF450X</span>
                    </div>
                    <div className='CRF450RWE-container'>
                        <div className='CRF450RWE-bg'>
                        </div>
                        <span className='model-CRF450RWE'>CRF450RWE</span>
                    </div>

                </div>
            </div>
        )
    }
}