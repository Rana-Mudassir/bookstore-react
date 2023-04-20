import React from 'react';
import PropTypes from 'prop-types';

function Books({
  title, author, button, itemId, handleDelete,
}) {
  const handleClick = () => {
    handleDelete(itemId);
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{title}</td>
          <td>{author}</td>
          <td>
            <button type="button" onClick={handleClick}>{button}</button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Books;
