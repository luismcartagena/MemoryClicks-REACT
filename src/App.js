import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/index";
import Board from  "./components/Board/index";
import images from "./image";

class App extends Component {
  state = {
    "message": "Click an image to start",
    "score": 0,
    // "images": [1,2,3,4,5,6,7,8,9,10],
    "images": images,
    "clicked": []
  };

  // handleImageClick = (event) => {
  //   console.log("CLICKED", event.target);
  //   let imageId = event.target.getAttribute("id");
  //   console.log("Image ID", imageId);
  // }

  handleImageClickById = (imageId) => {
    let clicked = this.state.clicked.slice(0); // new array; copy of "clicked" array from state

    // is this imageId in clicked
    if (clicked.findIndex(item => imageId === item) === -1){
      clicked.push(imageId);
      this.setState({
        "clicked": clicked,
        "score": this.state.score + 1,
        "message": "Good guess, keep going!"
      })
    } else {
      // you lose, start over
      this.setState({
        "message": "You Lose, start over :(",
        "score": 0,
        "clicked": []
      })
    }
    // rearrange images
    let images = this.state.images.slice(0);
    images.sort(() => Math.random() - 0.5);
    this.setState({images});
    console.log("handling click for ", imageId);
  }


  render() {
    return (
      <div className="container">
        <Header 
        message={this.state.message}
        score={this.state.score}
        total={this.state.images.length} />

        <Board
          images={this.state.images}
          clickHandler={this.handleImageClickById}
        />
        {/* <div id="board">
          {this.state.images.map(image => (
            <div style={{backgroundColor: image.color}} className="image" id={"image-" + image} key={image.index} onClick={ 
              () => {this.handleImageClickById(image.index)}} ></div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;
