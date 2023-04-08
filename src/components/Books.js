import React from 'react';

// eslint-disable-next-line react/prop-types
function Books({ title, author, button }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{title}</td>
          <td>{author}</td>
          <td>
            <button type="button">{button}</button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default Books;
