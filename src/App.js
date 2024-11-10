import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setInitialData } from './Redux/features/cashFlowreducer';
import { data, options } from "./Common/data";
import Header from "./Components/Header";
import Content from "./Components/Sankey/Chart";

import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const payload = {data: data, options: options}
    dispatch(setInitialData(payload))
  },[])

  return (
    <div className="App">
      <Header />
      <Content />
      {/* d3 sankey chart */}
      {/* <SankeyChart />    */}
    </div>
  );
}

export default App;
