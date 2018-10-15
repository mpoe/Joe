import React from 'react';

import { Video } from './HomePage/Video';
import { Feature } from './HomePage/Feature';
import { Locator } from './HomePage/Locator';
import { Footer } from './Footer';
import '../css/HomePage.css';

export class HomePage extends React.Component {
    render(){
        return (
            <div>
                <Video background={'space.jpg'} video={'red'} />
                <div className='container row'>
                    <Locator
                        title='STORE LOCATOR'
                        buttonText='FIND US!'
                        backgroundImage='storelocator.jpg' 
                    />
                    <Locator
                        title='THE MENU'
                        buttonText='SEE NUTRITION INFO!'
                        backgroundImage='menu.gif' 
                    />
                </div>
                <div className='container row'>
                    <Feature title='Wynwood #artforjuice Competition' backgroundImage='space.jpg' videoID = '295138302' />
                    <Feature title='JUICE & TATTOOS: TATTOODO x JOE & THE JUICE' backgroundImage='water.png' videoID = '295138302' />
                    <Feature title='JJ x Sage Barnes - Art Basel edition' backgroundImage='space.jpg' videoID = '295003915/' />
                    <Feature title='Brainwash Fresh' backgroundImage='water.png' videoID = '295003915/' />
                </div>
                <Footer />
            </div>
        )
    }
}