import React from 'react';

import { data, options } from "./Common/data";
import Header from "./Components/Header";
import Content from "./Components/Sankey/Chart";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content data={data} options={options} />
      {/* d3 sankey chart */}
      {/* <SankeyChart />    */}
    </div>
  );
}

export default App;
