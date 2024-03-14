import React from 'react';
import PropTypes from 'prop-types';

// Line 3: Changed the component name to singular form, "Student"
const Student = (props) => {
  return (
    <div className='Student'>
      <p>Name: {props.name}</p>
      <b>Age: {props.age}</b>
      <h2>Male: {props.isStudent ? "Yes" : "No"}</h2>
    </div>
  );
};

// Line 16-22: Moved propTypes outside of the component function, corrected the typo, and assigned propTypes correctly
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps={
  name: "Not provided",
  age: 0,
}

export default Student;
