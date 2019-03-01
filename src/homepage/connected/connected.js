import React, { Component } from 'react';
import './connected.css';


export default class Connected extends Component {

    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            email: '',
            zip: '',
            checkmark: false
        }
    }
    handleCheckmark(){
        this.setState({checkmark:!this.state.checkmark})
    }
    handleReset(){
        this.setState({first:'',last:'',email:'',zip:'',checkmark:false})
    }
    render() {
        // console.log('state',this.state.first,this.state.last,this.state.email,this.state.zip)
        console.log('check',this.state.checkmark)
        return (
            <div className='connected' id='stay-connected'>
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
                    <input type='checkbox' className='connected-checkbox' onClick={()=>this.handleCheckmark()}/>
                    {!this.state.checkmark?null:
                    <i className='connected-i checkmark' onClick={()=>this.handleCheckmark()}></i>}
                    <div className='connected-span-container'>
                    <span className='connected-span'>
                    Opt-in for General News and Information from Honda
                    </span>
                    </div>
                    </div>
                    <input type='reset' value="SUBMIT" className='connected-button' onClick={()=>this.handleReset()}/>
                </form>
                    
            </div>
        )
    }
}