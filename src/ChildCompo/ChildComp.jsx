/* eslint-disable */
import React from 'react';

const ChildComp = (props) => {
  const { name, age, profession } = props.user;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default ChildComp;
