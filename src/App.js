import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        There is {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
