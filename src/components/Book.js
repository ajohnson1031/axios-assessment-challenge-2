import React from "react";

const Book = ({ data, keyitem }) => (
  <div key={keyitem} className='book'>
    {Object.entries(data).map(([k, v]) => (
      <div key={k} className='book-detail-row'>
        <span className='book-detail-key'>{k}</span>
        <span className='book-detail-val'>{v}</span>
      </div>
    ))}
  </div>
);
export default Book;
