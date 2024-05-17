import React, { useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css"
export default function Dictionary(props){
  let [keyword, setKeyword]= useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

    
  function handleImages(response) {
    setPhotos(response.data.photos);
  }


   function handleResponse(response){
     setResults(response.data);
     let apiKey = "98f12063t8f0b4be43fb6oa12441998c";
     let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
     axios
       .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
       .then(handleImages);
}
    function load() {
      setLoaded(true);
      search();
    }
    
    function search(){
      let apiKey="98f12063t8f0b4be43fb6oa12441998c";
      let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
  }
  
      function handleSubmit(event) {
      event.preventDefault();
       search();
  }
  
    function handleKeywordChange(event){
        event.preventDefault();
        setKeyword(event.target.value);
  }
  
  if (loaded) {
    return (
   
        <div className="Dictionary">
         <section>
          <form  onSubmit={handleSubmit} >
          <label>What word do you want to look up?</label>
            <div className="input-data">
            <input type="search"
            placeholder="Search for a word..."
            defaultValue={props.defaultKeyword}
             autoFocus={true}
             className="form-control search-input"
             onChange={handleKeywordChange}  />
            <input type="submit"  value="search" className="button-submit" />
            </div>
        </form>
        <small className="hint">i.e. country, humanity, justic, coding</small>
        </section>
        <Results  results={results}/>
       
       
       
        <Photos photos={photos} />
      </div>
    )
}
else {
  load();
  return "Loading!"
}
}



