
import Dictionary from "./Dictionary.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
       Treasure Dictionary
      </header>
      <main>
        < Dictionary defaultKeyword="nature"  />
      </main>
      <footer className="App-footer">
  
         This project was coded by <a rel="noreferrer" href="https://www.linkedin.com/in/bushra-k-26000b221/" target="_blank">Bushra Khugyani</a> and is {" "}
         <a rel="noreferrer" href="https://github.com/bushrakhugyani/dictionary-4u" target="_blank"> open-sourced on GitHub</a>
      </footer>

    </div>
  );
}

export default App;
