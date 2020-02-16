import React from "react";
import "./search-box.styles.scss";

/*
    Ici on remplace notre "props" par un 
    destructuring object {placeholder, handleChange}
    ce qui permettra d'être plus concis dans la syntaxe d'écriture ensuite
    et d'appeler directement placeholder plutôt que props.placeholer par ex.
 */
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
