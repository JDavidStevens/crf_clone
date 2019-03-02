import React, { Component } from 'react';
import './intro.css';

export default class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className='intro-title'><h1 className='intro-h1'>About</h1><h3 className='intro-h3'>this site...</h3></div>
                <div className='p-div'>
                    <p className='intro-p'>This website is not associated with any brands found herein. The purpose of this clone site is to help me develop and demonstrate my abilities in React, HTML, CSS, and JavaScript. Currently, its responsive design is best suited for a 17'' laptop screen, as well as iPhone 6/7/8 and iPad in portrait view. In order to limit the scope of this project to a single page website, only links to items within the page are functional.</p>
                </div>
            </div>
        )
    }
}