import '../css/footer.css';
import React from 'react';

export class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
        }
    }

    onPress = () => {
        this.setState({expanded : !this.state.expanded})
    }

    render(){
        return (
            <div className='footer'>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingLeft:15, paddingRight:15, backgroundColor:'darkgoldenrod'}}>V</div>
                <div style={{display:'flex', alignItems:'center',paddingLeft:15, backgroundColor:'darkred', width:'100%'}}>Contact</div>
            </div>
        )

    }
}