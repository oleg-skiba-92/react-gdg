import React, {Component} from 'react';
import {connect} from "react-redux";
import './App.css';
import {getSliderDataRequest} from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getSliderData();
  }

  render() {
    return (
      <div className="App">
        <gdg-slider slider-array={JSON.stringify(this.props.sliderData)}></gdg-slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sliderData: state.data,
    error: state.error || '',
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSliderData: () =>
      dispatch(getSliderDataRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

