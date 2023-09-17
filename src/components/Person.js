import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h1 key='1'>Name: {props.name} </h1>
      <h1 key='2'>Email: {props.email} </h1>
      <h1 key='3'>Age: {props.age} </h1>
      <h1 key='4'>This person {props.isMarried ? "is" : "is not"} MARRIED </h1>
      {props.friends.map((friend, index) => (
        <h1 key={index}>{friend}</h1>
      ))}
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
