import React from "react";

const SearchBox = ({ fields, handleChange }) => (
  <div className='search-box'>
    {Object.keys(fields).map((e) => (
      <label key={e}>
        {e}
        <input
          autoComplete='off'
          value={fields[e]}
          className={e}
          onChange={(evt) => handleChange(evt, e)}
        />
      </label>
    ))}
  </div>
);
export default SearchBox;
