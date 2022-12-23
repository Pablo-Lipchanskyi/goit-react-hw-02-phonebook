import PropTypes from 'prop-types';


export const Button = ({ type = 'submit', children, actionHandler }) => {
  return (
    <button type={type} onClick={actionHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func,
};