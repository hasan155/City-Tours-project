import React, { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import TourList from "./Components/TourList/TourList";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
};

export default App;