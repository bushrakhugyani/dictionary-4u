import React from "react";
import Synonyms from "./Synonyms.js"
import "./Meaning.css";


export default function Meaning(props) {
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
  return (
    <div className="Meaning">
      <br />
      <h3>{capitalizeFirstLetter(props.meaning.partOfSpeech)}</h3>
      <h4>
        {" "}
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">{props.meaning.example}</div>
      </h4>

      <Synonyms synonyms={props.meaning.synonyms} />
    
    </div>
  );
}