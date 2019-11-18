import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function ComposedComponents() {
  return (
    <div>
      <Welcome name="Prabhakar" />
      <Welcome name="Pratim" />
      <Welcome name="Borah" />
      <Welcome name="Just tried composing components !" />
    </div>
  );
}

export default ComposedComponents;
