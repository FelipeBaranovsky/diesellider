// OrientationChangeListener.js
import React, { Component } from 'react';
import { Dimensions } from 'react-native';

class OrientationChangeListener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandscape: Dimensions.get('window').width > Dimensions.get('window').height,
      windowWidth: Dimensions.get('window').width,
      windowHeight: Dimensions.get('window').height,
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleOrientationChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleOrientationChange);
  }

  handleOrientationChange = ({ window }) => {
    const isLandscape = window.width > window.height;
    this.setState({
      isLandscape,
      windowWidth: window.width,
      windowHeight: window.height,
    });
  };

  render() {
    const { isLandscape, windowWidth, windowHeight } = this.state;
    const { children } = this.props;

    // Renderiza el contenido pasado como children y pasa los estados como props.
    return children({ isLandscape, windowWidth, windowHeight });
  }
}

export default OrientationChangeListener;
