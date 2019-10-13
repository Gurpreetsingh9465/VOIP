import React, { Component } from 'react';
import utils from './utils';

class WebcamCapture extends Component {
  state = {
    image : ''
  }
  setRef = webcam => {
    this.webcam = webcam;
  };
  componentDidMount() {
    setInterval(this.capture,40)
  }
  capture = () => {
    try{
      let imageSrc = this.webcam.getScreenshot();
      let cypher = utils.encryptAES(imageSrc,'qwerty1234qwerty');
      let decypher = utils.decryptAES(cypher,'qwerty1234qwerty')
      this.setState({image: decypher});
    } catch(err){
      console.log(err);
    }
  };

  render() {
    

    return (
      <div>

      <img alt={this.state.image} src={this.state.image}/>
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
export default WebcamCapture;
