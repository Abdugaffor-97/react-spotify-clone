import React from "react";
import { Col, Row } from "react-bootstrap";
import { data } from "./borwse";
import "./styles.scss";

const Search = () => {
  return (
    <div id="list">
      <Col>
        <Row xs={2} sm={3} md={4} lg={6} xl={7}>
          {data.items.map((item, idx) => (
            <div key={idx} id="item">
              <h3>{item.name}</h3>
              <img src={item.icons[0].url} alt={item.name} />
            </div>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Search;
