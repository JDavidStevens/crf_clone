import React, { Component } from 'react';
import './gallery.css';
import CRF450RX from '../../assets/CRF Performance Line - Honda Powersports_files/Collective_CRF450RX_01.jpg';
import CRF250R from '../../assets/CRF Performance Line - Honda Powersports_files/Collective_CRF250RX_04.jpg';
import CRF450L from '../../assets/CRF Performance Line - Honda Powersports_files/Collective_CRF450L_05.jpg';
import CRF250RX from '../../assets/CRF Performance Line - Honda Powersports_files/Collective_CRF250RX_02.jpg';
import CRF450X from '../../assets/CRF Performance Line - Honda Powersports_files/Collective_CRF450X_03.jpg';
import CRF450RWE from '../../assets/CRF Performance Line - Honda Powersports_files/Collective_CRF450RWE_06.jpg';


export default class Gallery extends Component {

    render() {
        return (
            <div className='gallery' >
                <div>
                    <h3 className='gallery-h3'>The Honda CRF Performance Line</h3>
                    <h2 className='gallery-h2'>GALLERY</h2>
                </div>
                <div className='gallery-photos'>
                    <div className='top-gallery'>
                        <div className='CRF450RX-container'>
                            <div className='CRF450RX-image'>
                                <p className="CRF450RX-title">CRF450RX</p>
                            </div>
                            {/* <img src={CRF450RX} alt="CRF450RX" className='CRF450RX' /> */}
                            <span className="CRF450RX-title">CRF450RX</span>
                        </div>
                        <div className='CRF250R-container'>
                            <img src={CRF250R} alt="CRF250R" className='CRF250R' />
                            <p className="CRF250R-title">CRF250R</p>
                        </div>
                        <div className='CRF450L-container'>
                            <img src={CRF450L} alt="CRF450L" className='CRF450L' />
                            <p className="CRF450L-title">CRF450L</p>
                        </div>
                        <div className="CRF250RX-container">
                            <img src={CRF250RX} alt="CRF250RX" className="CRF250RX" />
                            <p className="CRF250RX-title">CRF250RX</p>
                        </div>
                    </div>
                    <div className='CRF450X-container'>
                        <img src={CRF450X} alt="CRF450X" className='CRF450X' />
                        <p className="CRF450X-title">CRF450X</p>
                    </div>
                    <div className='CRF450RWE-container'>
                        <img src={CRF450RWE} alt="CRF450RWE" className='CRF450RWE' />
                        <p className="CRF450RWE-title">CRF450RWE</p>
                    </div>
                </div>
            </div>
        )
    }
}