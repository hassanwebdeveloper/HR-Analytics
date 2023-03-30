import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {Pivot, PivotItem, Label, Text} from "@fluentui/react"
import HCDashboard from './Components/HCDashboard';

function App() {
  // const [getMessage, setGetMessage] = useState({});

  // useEffect(() => {
  //   fetch('http://localhost:5000/flask/hello').then(res => res.json()).then(data => {
  //     setGetMessage(JSON.parse(data));
  //   });
  // }, []);
  // <Plot data={getMessage.data} layout={getMessage.layout}/>
  const pivistyles = {
    root:[{
      display:"inline !important"
    }]
  };
  return (
    <>
      <header>
        <Text variant={"xxLarge"}>HR Analytics</Text>
        <Pivot styles={pivistyles} >
          <PivotItem headerText='Head Count Analytics'>
            <HCDashboard />
          </PivotItem>
          <PivotItem headerText='Absentees Analytics'>
            <Label>Predictive Analytics</Label>
          </PivotItem>
          <PivotItem headerText='Financial Analytics'>
            <Label>Prescriptive Analytics</Label>
          </PivotItem>
        </Pivot>
      </header>
    </>
  );
}

export default App;
