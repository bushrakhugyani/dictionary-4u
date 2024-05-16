import React from "react";
import "./Meaning.css";


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>
        {" "}
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">{props.meaning.example}</div>
      </h4>

    </div>
  );
}