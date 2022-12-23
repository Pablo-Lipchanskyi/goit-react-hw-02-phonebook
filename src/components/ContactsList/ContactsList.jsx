import PropTypes from 'prop-types';
import { ButtonDelete } from 'components/Button/ButtonDelete';

export const ContactsList = ({ contacts, onDeleteButton }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <marker key={id}>
            <>
              {`${name}: ${number}`}
              <ButtonDelete actionHandler={() => onDeleteButton(id)}>
                X
              </ButtonDelete>
            </>
          </marker>
        );
      })}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    }).isRequired
  ),
  onDeleteButton: PropTypes.func.isRequired,
};