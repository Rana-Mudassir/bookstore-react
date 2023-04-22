import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';
import '../Assests/bookList.css';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
import Loader from './Loader';

function BookList() {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const hrStyle = {
    width: '75rem',
    height: '0.125rem',
    margin: '2.5rem 0.063rem 1.813rem 0',
    border: 'solid 1px #e8e8e8',
  };

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        books.length > 0 && books.map((book) => (
          <Books key={book.item_id} title={book.title} author={book.author} category={book.category} button="Remove" itemId={book.item_id} handleDelete={handleDelete} />
        ))
      )}
      <hr style={hrStyle} />
      <Form />
    </>
  );
}

export default BookList;
