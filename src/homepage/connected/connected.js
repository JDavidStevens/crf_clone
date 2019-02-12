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
                <form className='connected-inputs-container'>
                    <input type='text' className='connected-inputs' placeholder='FIRST NAME' onChange={e => this.setState({ first: e.target.value })}/>
                    <input type="text" className='connected-inputs' placeholder='LAST NAME' onChange={e => this.setState({ last: e.target.value })}/>
                    <input type="text" className='connected-inputs' placeholder='EMAIL' onChange={e => this.setState({ email: e.target.value })}/>
                    <input type="text" className='connected-inputs' placeholder='ZIP CODE' onChange={e => this.setState({ zip: e.target.value })}/>
                    <div className='checkbox-wrapper'>
                    <input type='checkbox' className='connected-checkbox'/>
                    <span className='connected-span'>
                    Opt-in for General News and Information from Honda
                    </span>
                    </div>
                    <input type='submit' value='SUBMIT' className='connected-button'/>
                </form>
                    
            </div>
        )
    }
}