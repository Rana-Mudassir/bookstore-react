import React from 'react';

function Books({
// eslint-disable-next-line react/prop-types
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

export default Books;
