import './App.css';
import loveLetters from './loveLetters.json';
import React from 'react';

// const checkForImg = (day) => {
//     for (let i of loveLetters.images) {
//         if (i.day == day) {
//             return True;
//         }
//     }
//     return False;
// }
// const findImgUrl = (day) => {
//     //assumes there is an image at the day
//     for (let i of loveLetters.images) {
//         if (i.day == day) {
//             return i.url;
//         }
//     }
//     return "Url Not Found"
// }
// const findImgTitle = (day) => {
//     //assumes there is an image at the day
//     for (let i of loveLetters.images) {
//         if (i.day == day) {
//             return i.title;
//         }
//     }
//     return "Title Not Found"
// }

class Text extends React.Component {
  constructor(props) {
      super(props);
      this.iterateLeft = this.iterateLeft.bind(this);
      this.iterateRight = this.iterateRight.bind(this);
      this.onChange = this.onChange.bind(this);
      this.state = {
          currentText: loveLetters.text[loveLetters.text.length - 3],//loveLetters.text[loveLetters.text.length - 1],
          day: loveLetters.text.length - 2,//loveLetters.text.length,
          input: ''
      }
  }
  iterateLeft() {
      this.setState({currentText: loveLetters.text[this.state.day - 2], day: this.state.day - 1}) 
  }
  iterateRight() {
      this.setState({currentText: loveLetters.text[this.state.day], day: this.state.day + 1}) 
  }
 onChange(event) {
      this.setState({currentText: this.state.currentText, day: this.state.day, input: event.target.value})
    }

  render() {
      if (this.state.input === "nathanlovesme") 
      {
        return (<>
          {console.log(this.state)}
          <p id="heart-text">"{this.state.currentText}"</p>
          <div id="loveButtons">
          {this.state.day - 1 > 0 ? <button id="prevButton" onClick={this.iterateLeft}>Last</button> : <div id="prevButton"/>}
          {this.state.day < loveLetters.text.length ? <button id="nextButton" onClick={this.iterateRight}>Next</button> : <div id="nextButton"/>}
          </div>
          {/*{checkForImg(this.state.day - 1) ? <img id="loveImg" src={findImgUrl(this.state.day - 1)} /> : <div id="loveImg" />}
          {checkForImg(this.state.day - 1) ? <h2 id="loveImgTitle">{findImgTitle(this.state.day - 1)}</h2> : <div id="loveImgTitle" />}*/}
          </>
      )
      } else { 
          console.log(this.state)
          return (<>
      <input onChange={this.onChange} type="password" class="passcode" />
      </>)
      }
  }
}

export default Text;
