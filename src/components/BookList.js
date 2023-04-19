import React from 'react';
import Books from './Books';
import Form from './Form';
import '../Assests/bookList.css';

function BookList() {
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
        <Books title="The last Fight" author="Nolan Chris" button="Remove" />
        <Books title="Blood Diamon" author="Brand Clay" button="Remove" />
        <Books title="New City" author="Aled duns" button="Remove" />
      </table>
      <Form />
    </>
  );
}

export default BookList;
