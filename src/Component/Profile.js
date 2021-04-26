import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "This is my name",
      bio: "This is my bio",
      imgSrc:
        "https://www.drostatic.com/images/lemagfemmes/home/rose_rouge.jpg",
      profession: "my profession",
    };
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.fullName}</h2>
        <h2>{this.state.bio}</h2>
        <img src={this.state.imgSrc} height="200px" />
        <h2>{this.state.profession}</h2>
      </div>
    );
  }
}

export default Profile;
