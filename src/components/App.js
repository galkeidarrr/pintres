import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { photos: [] };

  onSearchSubmit = async term => {
    //request for unsplash API to send us JSON with all the diffrent photos that he found
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID b20eacb5ce97108d4c87e3d53e77606a351b9b316a6986d6a9f9c2380d337cd9"
      }
    });

    this.setState({ photos: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        found: {this.state.photos.length} photos
      </div>
    );
  }
}

export default App;
