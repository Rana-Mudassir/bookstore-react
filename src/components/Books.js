import React from 'react';
import PropTypes from 'prop-types';

function Books({
  title, author, button, itemId, handleDelete, category,
}) {
  const handleClick = () => {
    if (itemId) {
      handleDelete(itemId);
    }
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={handleClick}>{button}</button>
      </td>
    </tr>

  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  itemId: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
