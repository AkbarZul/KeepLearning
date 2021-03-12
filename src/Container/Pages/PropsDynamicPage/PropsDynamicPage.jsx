import React, { Component } from "react";
import PropsDynamic from "../../../Component/PropsDynamic/PropsDynamic"

class PropsDynamicPage extends Component {
  render() {
    return (
      <div>
        <p>Refresh Materi Props</p>
        <hr />
        <PropsDynamic
          time="08.00"
          tittle="Tutorial cuci sepatu - Bagian 1"
          desc="2x ditonton"
        />
        <PropsDynamic
          time="09.00"
          tittle="Tutorial cuci sepatu - Bagian 2"
          desc="3x ditonton"
        />
        <PropsDynamic
          time="10.00"
          tittle="Tutorial cuci sepatu - Bagian 3"
          desc="1x ditonton"
        />
        <PropsDynamic
          time="15.00"
          tittle="Tutorial cuci sepatu - Bagian 4"
          desc="5x ditonton"
        />
        <PropsDynamic />
      </div>
    );
  }
}

export default PropsDynamicPage;
