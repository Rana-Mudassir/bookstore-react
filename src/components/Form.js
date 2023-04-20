import React, { useState } from 'react';
import '../Assests/form.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [book, setBook] = useState({
    itemId: uuidv4(),
    title: '',
    author: '',
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
    setBook({ id: uuidv4(), title: '', author: '' });
    dispatch(addBook(book));
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
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
}

export default Form;
