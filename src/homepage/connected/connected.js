import React, { Component } from 'react';
import './connected.css';


export default class Connected extends Component {

    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            email: '',
            zip: ''
        }
    }

    render() {
        return (
            <div className='connected'>
                <div className='connected-title'>
                    <h2 className='connected-h2'>STAY CONNECTED</h2>
                    <p className='connected-p'>Stay up-to-date on the latest news from the CRF Performance Line</p>
                </div>
                <div className='connected-inputs-container'>
                    <input className='connected-inputs' placeholder='FIRST NAME' onChange={e => this.setState({ first: e.target.value })}></input>
                    <input className='connected-inputs' placeholder='LAST NAME' onChange={e => this.setState({ last: e.target.value })}></input>
                    <input className='connected-inputs' placeholder='EMAIL' onChange={e => this.setState({ email: e.target.value })}></input>
                    <input className='connected-inputs' placeholder='ZIP CODE' onChange={e => this.setState({ zip: e.target.value })}></input>
                </div>
                <div className='connected-opt-submit-container'>
                    <div className='connected-opt-in'></div>
                    <div className='connected-submit'>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        )
    }
}