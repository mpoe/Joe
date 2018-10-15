import '../../css/locator.css';
import React from 'react';

//Stateless functional component https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56e
export const Locator = (props) => {
    const bgImage = require(`../../media/${props.backgroundImage}`)
    return (
        //You have to split the background into a variable in order to use it...
        <div style={{position:'relative'}}>
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <h2>Title</h2>
                <p>Button</p>
            </div>
            <img className='locatorImage' src={require(`../../media/${props.backgroundImage}`)}></img>
        </div>
    )
}