import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';
import '../Assests/bookList.css';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  // console.log('books', books[0].itemId);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        {books.map((book) => (
          <Books key={book.itemId} title={book.title} author={book.author} button="Remove" itemId={book.itemId} handleDelete={handleDelete} />
        ))}
      </table>
      <Form />
    </>
  );
}

export default BookList;
