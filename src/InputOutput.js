import React from 'react';
import PropTypes from 'prop-types';

const InputOutput = props => {
  return (
    <h1>My name is {props.name} and I like the number {props.favNum}. What I said is {props.bool ? 'true' : 'false' }!</h1>
  )
}

export default InputOutput;

InputOutput.propTypes = {
  name: PropTypes.string,
  favNum: PropTypes.number,
  bool: PropTypes.bool,
  nameError: function(props, propName, componentName) {
    if (typeof props.name !== 'string') {
      return Error('UH OH. Error: ' + propName + ' in ' + componentName)
    }
  }
}