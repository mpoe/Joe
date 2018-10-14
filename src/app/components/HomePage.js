import React from 'react';

import { Video } from './HomePage/Video';
import { Feature } from './HomePage/Feature';

export class HomePage extends React.Component {
    render(){
        return (
            <div>
                <Video background={'space.jpg'} video={'red'} />
                <div style={{display:'flex'}}>
                    <Feature />
                    <Feature />
                    <Feature />
                    <Feature />
                </div>
            </div>
        )
    }
}