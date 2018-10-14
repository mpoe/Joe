import '../../css/feature.css';
import React from 'react';

//Stateless functional component https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56e
export class Feature extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showVideo: false,
        }
    }

    onPress = () => {
        this.setState({showVideo : !this.state.showVideo})
    }

    render(){
        const bgImage = require('../../media/space.jpg')
        return (
            <div className='feature' style={{backgroundColor:'black', backgroundImage: !this.state.showVideo && `url(${bgImage})`}}>
                <div style={{display: this.state.showVideo ? 'none' : 'block'}}>
                    <h3>Title here</h3>
                    <div className='featureBtn'>
                        <p onClick={this.onPress}>Button Text</p>
                    </div>
                </div>
                <iframe 
                src="https://player.vimeo.com/video/295003915?title=0&byline=0&portrait=0" 
                style={{width:'100%', height:'100%', display: this.state.showVideo ? 'block' : 'none'}}
                frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen>
                </iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        )

    }
}