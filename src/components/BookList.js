import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';
import '../Assests/bookList.css';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            books.length > 0 && books.map((book) => (
              <Books key={book.item_id} title={book.title} author={book.author} category={book.category} button="Remove" itemId={book.item_id} handleDelete={handleDelete} />
            ))
          }
        </tbody>
      </table>
      <Form />
    </>
  );
}

export default BookList;
