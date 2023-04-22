import React, { useState } from 'react';
import '../Assests/form.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...book,
    };
    dispatch(addBook(newBook));
    setBook({ title: '', author: '', category: '' });
  };

  return (
    <>
      <h2 className="text-muted">Add New Book</h2>
      <form onSubmit={handleClick}>
        <div className="input-container">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
            className="title-input"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            className="author-input"
          />
          <select name="category" value={book.category} onChange={handleChange} className="category-select">
            <option>Select Category</option>
            <option>Thriller</option>
            <option>Religious</option>
            <option>Humor</option>
            <option>Fantasy</option>
            <option>Sci-fi</option>
            <option>Fiction</option>
          </select>
          <button type="submit" className="btn">Add BOOK</button>
        </div>

      </form>
    </>
  );
}

export default Form;
