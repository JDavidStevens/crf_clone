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
                        <img src={CRF450RX} alt="CRF450RX" className='CRF450RX' />
                        <img src={CRF250R} alt="CRF250R" className='CRF250R' />
                        <img src={CRF450L} alt="CRF450L" className='CRF450L' />
                        <div className="CRF250RX-container">
                            <img src={CRF250RX} alt="CRF250RX" className="CRF250RX" />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <img src={CRF450X} alt="CRF450X" className='CRF450X' />
                        <img src={CRF450RWE} alt="CRF450RWE" className='CRF450RWE' />
                    </div>
                </div>
            </div>
        )
    }
}