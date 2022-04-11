import './App.css';
import React from 'react';

class Text extends React.Component {
  constructor(props) {
      super(props);
      this.iterateLeft = this.iterateLeft.bind(this);
      this.iterateRight = this.iterateRight.bind(this);
      this.state = {
          currentText: props.text[props.text.length - 1],
          day: props.text.length
      }
  }
  iterateLeft() {
      this.setState({currentText: this.props.text[this.state.day - 2], day: this.state.day - 1}) 
  }
  iterateRight() {
      this.setState({currentText: this.props.text[this.state.day], day: this.state.day + 1}) 
  }
  render() {
      return (
          <>
          {console.log(this.state)}
          <p id="heart-text">"{this.state.currentText}"</p>
          <div id="loveButtons">
          {this.state.day - 1 > 0 ? <button id="prevButton" onClick={this.iterateLeft}>Last</button> : <div id="nextButton"/>}
          {this.state.day < this.props.text.length ? <button id="nextButton" onClick={this.iterateRight}>Next</button> : <div id="nextButton"/>}
          </div>
          </>
      )
  }
}

export default Text;
