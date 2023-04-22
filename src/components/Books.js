import React from 'react';
import PropTypes from 'prop-types';
import '../Assests/book.css';

function Books({
  title, author, itemId, handleDelete, category,
}) {
  const handleClick = () => {
    if (itemId) {
      handleDelete(itemId);
    }
  };

  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={container}>
      <div className="card">
        <div className="left-section">
          <p>{category}</p>
          <h3>{title}</h3>
          <span>{author}</span>
          <ul className="actions">
            <li>Comments</li>
            <li>
              <div role="button" onClick={handleClick} aria-hidden="true">
                Remove
              </div>
            </li>
            <li>Edit</li>
          </ul>
        </div>

        <div className="middle-section">
          <div className="wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
          <div className="percentages">
            <h2>80%</h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="right-section">
          <h3 className="current-chapter">Current chapter</h3>
          <h3 className="chapter">Chapter 6</h3>
          <button type="button">UPDATE PRGRESS</button>
        </div>
      </div>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
