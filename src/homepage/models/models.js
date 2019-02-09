import React, { Component } from 'react';
import './models.css';
import CRF450RWE from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF450RWE_370x246_Red_FFF.jpg';
import CRF450R from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF450R_370x246_Red_fff.jpg';
import CRF450RX from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF450RX_370x246_Red_fff.jpg';
import CRF450L from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF450L_370x246_Red_FFF.jpg';
import CRF450X from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF450X_370x246_Red_fff.jpg';
import CRF250R from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF250R_370x246_Red_fff.jpg';
import CRF250RX from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF250RX_370x246_Red_fff.jpg';
import CRF250X from '../../assets/CRF Performance Line - Honda Powersports_files/2017_CRF250X_370x246_Red_fff.jpg';
import CRF150R from '../../assets/CRF Performance Line - Honda Powersports_files/2019_CRF150R_370x246_Red_fff.jpg';
import Montesa300 from '../../assets/CRF Performance Line - Honda Powersports_files/2018_MontesaCota300RR_370x246_Red_fff.jpg';
import Montesa260 from '../../assets/CRF Performance Line - Honda Powersports_files/2018_MontesaCota4RT260_370x246_WhiteBlueRed_fff.jpg';





export default class Models extends Component {

    render() {
        return (
            <div className='models-wrapper'>
                <div>
                    <h3 className="models-h3">There's a Honda for Every Winner.</h3>
                    <h2 className='models-h2'>CRF PERFORMANCE LINE</h2>
                </div>
                <div className='cards-wrapper'>
                    <div className='card'>
                        <h3 className='card-h3'>CRF450RWE</h3>
                        <p className='card-p'>Everything but the factory contract.</p>
                        <img className='card-image' src={CRF450RWE} alt='CRF450RWE' />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF450R</h3>
                        <p className='card-p'>Launch. Holeshot. Podium.</p>
                        <img className='card-image' src={CRF450R} alt='CRF450R' />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF450RX</h3>
                        <p className='card-p'>The Ultimate Enduro Weapon.</p>
                        <img className='card-image' src={CRF450RX} alt="CRF450RX" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF450L</h3>
                        <p className='card-p'>Trail to trail...and Then Some.</p>
                        <img className='card-image' src={CRF450L} alt='CRF450L' />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF450X</h3>
                        <p className='card-p'>Redesigned for Absolute Off-Road Xcellence.</p>
                        <img className="card-image" src={CRF450X} alt="CRF450X" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF250R</h3>
                        <p className='card-p'>Holeshots, Plus.</p>
                        <img className='card-image' src={CRF250R} alt="CRF250R" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF250RX</h3>
                        <p className='card-p'>Enduro Conquistador.</p>
                        <img className='card-image' src={CRF250RX} alt="CRF250RX" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF250X</h3>
                        <p className='card-p'>Trakc and Trail Champion.</p>
                        <img className='card-image' src={CRF250X} alt="CRF250X" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>CRF150R</h3>
                        <p className='card-p'>Winning Starts from Day One</p>
                        <img className='card-image' src={CRF150R} alt="CRF150R" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                </div>
                <h2 className='trials-h2'>OTHER COMPETITION MODELS</h2>
                <div className="cards-wrapper">
                    <div className='card'>
                        <h3 className='card-h3'>Montesa Cota 300RR</h3>
                        <p className='card-p'>Montesa Magic.</p>
                        <img className='card-image' src={Montesa300} alt="Montesa Cota 300RR" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='card-h3'>Montesa Cota 4RT260</h3>
                        <p className='card-p'>Viva Montesa!</p>
                        <img className='card-image' src={Montesa260} alt="Montesa Cota 4RT260" />
                        <div className='card-buttons'>
                            <button className='model-select-button'>SELECT</button>
                            <button className='model-build-button'>BUILD & PRICE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}