import React from 'react';
import '../Assests/form.css';

function Form() {
  return (
    <>
      <div className="wrapper">
        <h2>Add new Book</h2>
        <form>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="Author" />
          <button type="submit">Add Book</button>
        </form>
      </div>

    </>
  );
}

export default Form;
