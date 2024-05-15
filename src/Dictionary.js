import React, { useState}from "react";
import axios from "axios";
import "./Dictionary.css"
export default function Dictionary(){
  let [keyword, setKeyword]= useState("");
    
    
   function handleResponse(response){
   console.log(response.data);

}

   function handleSearch(event){
    event.preventDefault();
    let apiKey="98f12063t8f0b4be43fb6oa12441998c";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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