import React, { Component } from 'react'
import "./TourList.css";
import Tour from "../Tour/Tour";
import {tourData} from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  }
  RemovedTours = id => {
    const { tours } = this.state;
    const tourShorten = tours.filter(tour => tour.id !== id);
    this.setState ({
      tours: tourShorten
    })
  }
  render() {
    const {tours} = this.state;
    return (
      <section className="tourlist">
        {tours.map(item => {
          return (
            <Tour key={item.id} tour={item}
              DeleteTours = {this.RemovedTours}
             />
          );
        })}
      </section>
    )
  }
}
