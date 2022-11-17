import React from "react";
import "./ResourceFeild.scss";

const ResourceFeild = (props) => {
  const {
    showResourceFeild,
    setQA,
    setback,
    setfront,
    settest,
    settotal,
    total,
    front,
    back,
    QA,
    test,
  } = props;
  

  return (
    <div
      className="res-data"
      style={showResourceFeild ? { display: "block" } : { display: "none" }}
    >
      <div className="res-data__main">
        <span className="res-data__name">FrontEnd</span>
        <div className="res-data__sub--block">
          <button type="button"
            className="res-data__incre-btn"
            onClick={() => {
              setfront(front - 1);
              settotal(total - 1);
            }}
          >
            -
          </button>
          <span className="res-data__value">{front}</span>
          <button type="button"
            className="res-data__decre-btn"
            onClick={() => {
              setfront(front + 1);
              settotal(total + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="res-data__main">
        <span className="res-data__name">BackEnd</span>
        <div className="res-data__sub--block">
          <button
            type="button"
            className="res-data__incre-btn"
            onClick={() => {
              setback(back - 1);
              settotal(total - 1);
            }}
          >
            -
          </button>
          <span className="res-data__value">{back}</span>
          <button
            type="button"
            className="res-data__decre-btn"
            onClick={() => {
              setback(back + 1);
              settotal(total + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="res-data__main">
        <span className="res-data__name">QA</span>
        <div className="res-data__sub--block">
          <button
            type="button"
            className="res-data__incre-btn"
            onClick={() => {
              setQA(QA - 1);
              settotal(total - 1);
            }}
          >
            -
          </button>
          <span className="res-data__value">{QA}</span>
          <button
            type="button"
            className="res-data__decre-btn"
            onClick={() => {
              setQA(QA + 1);
              settotal(total + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="res-data__main">
        <span className="res-data__name">Designer</span>
        <div className="res-data__sub--block">
          <button
            type="button"
            className="res-data__incre-btn"
            onClick={() => {
              settest(test - 1);
              settotal(total - 1);
            }}
          >
            -
          </button>
          <span className="res-data__value">{test}</span>
          <button
            type="button"
            className="res-data__decre-btn"
            onClick={() => {
              settest(test + 1);
              settotal(total + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceFeild;
