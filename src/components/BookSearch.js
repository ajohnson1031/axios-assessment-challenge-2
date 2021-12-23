import React, { useState } from "react";
import Book from "./Book";
import SearchBox from "./SearchBox";

const BookSearch = ({ books }) => {
  const fieldNames = ["author", "title", "country", "language", "year"];

  const [fields, setFields] = useState(
    fieldNames.reduce((a, e) => {
      a[e] = "";
      return a;
    }, {})
  );

  const matches = (fields, book) => {
    let result = [];
    const bookEntries = Object.entries(book);

    bookEntries.forEach(([k, v]) => {
      if(!fields[k]) {}
      else if (
        v
          .toString()
          .toLowerCase()
          .includes(fields[k].toString().trim().toLowerCase())
      )
        result.push(true);
      else result.push(false);
    });
    return result.every((item) => item === true);
  };
  
  const bookFilter = books.filter((book) => matches(fields, book));

  const handleChange = (evt, name) => {
    const value = evt.target.value;
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='book-search-container'>
      <SearchBox fields={fields} handleChange={handleChange} />
      <div className='books'>
        {bookFilter &&
          bookFilter.map((e, i) => <Book data={e} keyitem={e.title + i} />)}
      </div>
    </div>
  );
};

export default BookSearch;
