import PropTypes from 'prop-types';


export const ButtonDelete = ({ type = 'button', children, actionHandler }) => {
  return (
    <button type={type} onClick={actionHandler}>
      {children}
    </button>
  );
};

ButtonDelete.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired,
};