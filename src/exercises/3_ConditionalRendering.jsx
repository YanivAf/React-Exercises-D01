import React, { Component } from 'react';

/**
 * Implement a simple function component that accepts one prop "number"
 * If the number is less than 10, the component will render a paragraph tag
 * with the text "Your number is less than 10" 
 * if the number is more than 10, the component will render an h1 tag
 * with the text "Your number is bigger than 10"
 * if no number provided, the component will render a span tag
 * with the text "No number provided"
 */
export default class ConditionalRendering extends Component {
  // your code
  constructor(props) {
    super(props);
  }

  render() {
    const doesNumberPropHaveValue = (this.props.number) ? true : false;
    const isNumber = !isNaN(this.props.number);
    if ((!doesNumberPropHaveValue) || (!isNumber)) return <span>No number Provided</span>;
    
    const toRender = (this.props.number < 10) ? <p>Your number is less than 10</p> : <p>Your number is 10 or bigger</p>;
    return toRender;
  }

}