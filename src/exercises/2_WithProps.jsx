import React, { Component } from 'react';

/**
 * Implement a simple function component that accepts one props "name"
 * and renders an h1 element with the text "Hi {name}" where {name} is 
 * the value in the prop "name"
 * if name is empty (empty string, undefined or null), render "Hi "
 */
export default class WithProps extends Component {
  // your code
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <h1>Hi {this.props.name && this.props.name}</h1>
    ); 
  }
}
