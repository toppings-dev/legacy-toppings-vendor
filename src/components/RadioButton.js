import React, { useState, useEffect, useRef } from 'react';

function RadioButton(props) {
  return (
    <div className="radio-button">
      <div className={props.currentChoice == props.options[0] ? "radio-button-option active" : "radio-button-option"} onClick={() => props.setChoice(props.options[0])}>{props.options[0]}</div>
      <div className={props.currentChoice == props.options[1] ? "radio-button-option active" : "radio-button-option"} onClick={() => props.setChoice(props.options[1])}>{props.options[1]}</div>
    </div>
  );
}

export default RadioButton;