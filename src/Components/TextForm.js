import React from "react";
import { useState } from "react";

function TextForm() {
  const [text, setText] = useState("enter Text");
  const onClickHandler = () => {
    console.log("it clicked");
    setText(text.toUpperCase());
  };
  const onChangeHandler = (event) => {
    console.log("it  cs clicked");
    setText(event.target.value);
  };
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={onChangeHandler}
          rows="5"
        ></textarea>
        <button
          type="button"
          onClick={onClickHandler}
          className="btn btn-primary"
        >
          Capitalize
        </button>
      </div>
    </div>
  );
}

export default TextForm;
