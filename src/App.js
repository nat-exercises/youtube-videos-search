import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
