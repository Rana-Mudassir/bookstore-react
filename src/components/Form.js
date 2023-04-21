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
      itemId: uuidv4(),
      ...book,
    };
    dispatch(addBook(newBook));
    setBook({ title: '', author: '', category: '' });
  };

  return (
    <>
      <div className="wrapper">
        <h2>Add new Book</h2>
        <form onSubmit={handleClick}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
          />
          <select name="category" value={book.category} onChange={handleChange}>
            <option>Select Category</option>
            <option>Crime and Thriller</option>
            <option>Religious and Self-help</option>
            <option>Humor</option>
            <option>Fantasy</option>
            <option>Sci-fi</option>
            <option>Fiction</option>
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
}

export default Form;
