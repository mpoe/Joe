import React from 'react';

import { Video } from './HomePage/Video';

export class HomePage extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello world</h1>
                <Video color='blue' />
            </div>
        )
    }
}