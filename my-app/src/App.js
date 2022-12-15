import React from 'react';
import './App.css';
import Header from "./components/Header"
import IpInfo from "./components/IpInfo"
import Map from "./components/Map"

function App() {

  React.useEffect(()=>{
    console.log("use Effect")
  }, [])

  console.log("here")

  return (
    <div className="App">
      <Header />
      <IpInfo />
      <Map />
    </div>
  );
}

export default App;
