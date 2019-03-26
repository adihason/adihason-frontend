import React, { Component } from 'react';
import ImagesList from '../components/ImagesList';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5001/pictures')
      .then(res => res.json())
      .then(pics => {
        this.setState({
          images: pics
        })
      })
  }

  render() {
    return (
      <div className="tc">
        <h1 className="tc">My Album</h1>
        <Scroll>
          <ImagesList images={this.state.images} />
        </Scroll>
      </div>
    );
  }
}

export default App;
