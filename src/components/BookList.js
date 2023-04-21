import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';
import '../Assests/bookList.css';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books: data } = useSelector((state) => state.books);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      let newData = [];
      Object.keys(data).forEach((key) => {
        if (data[key]?.length) {
          newData = [...newData, ...data[key]];
        }
      });
      setBooks(newData);
    }
  }, [data]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  console.log('books', books);
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
              <Books key={book.itemId} title={book.title} author={book.author} category={book.category} button="Remove" itemId={book.itemId} handleDelete={handleDelete} />
            ))
          }
        </tbody>
      </table>
      <Form />
    </>
  );
}

export default BookList;
