import React, { useState}from "react";
import "./Dictionary.css"
export default function Dictionary(){
  let [keyword, setKeyword]= useState("");
    
  
  function handleSearch(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  function handleKeywordChange(event){
        event.preventDefault();
        setKeyword(event.target.value);
  }
    return  (
        <div className="Dictionary">
       
        <form onSubmit={handleSearch} >
            <input type="search" onChange={handleKeywordChange}  />
            <input type="submit"  value="search"  />
        </form>
        </div>
    )
}