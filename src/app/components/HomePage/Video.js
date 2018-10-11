import '../../css/video.css';
import React from 'react';

//Stateless functional component https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56e
export const Video = (props) => {
    return (
        <div className='homepageVideo' style={{backgroundColor: props.color}}>
            <video id='vodep' loop autoPlay={true} muted>
                <source src={require('../../media/red.mp4')} />
            </video>
        </div>
    )
}