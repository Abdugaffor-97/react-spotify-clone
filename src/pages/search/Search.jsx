import React from "react";
import { data } from "./borwse";
import "./styles.scss";

const Search = () => {
  return (
    <div id="list">
      {data.items.map((item, idx) => (
        <div key={idx} id="item">
          <img src={item.icons[0].url} alt={item.name} />
          <h5>{item.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Search;
