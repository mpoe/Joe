import '../../css/feature.css';
import React from 'react';

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
        //You have to split the background into a variable in order to use it...
        const bgImage = require(`../../media/${this.props.backgroundImage}`)
        return (
            <div className='feature' style={{backgroundColor:'black', backgroundImage: !this.state.showVideo && `url(${bgImage})`}}>
                <div className='featureContainer' style={{display: this.state.showVideo ? 'none' : 'flex'}}>
                    <h3 className='featureTitle'>{this.props.title}</h3>
                    <div className='featureBtn'>
                        <p onClick={this.onPress}>PLAY VIDEO</p>
                    </div>
                </div>
                <iframe 
                src={`https://player.vimeo.com/video/${this.props.videoID}?title=0&byline=0&portrait=0`}
                style={{width:'100%', height:'100%', display: this.state.showVideo ? 'block' : 'none'}}
                frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen>
                </iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        )

    }
}