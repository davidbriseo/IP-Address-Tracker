import React from 'react';
import './App.css';
import Header from "./components/Header"
import IpInfo from "./components/IpInfo"
import Map from "./components/Map"
import {isIPAddress, isIPV6Address, isIPV4Address, ipVersion} from 'ip-address-validator';

const isValidDomain = require('is-valid-domain')

const apiKey = process.env.REACT_APP_GEOIP_API_KEY

function App() {

  let [inputSearch, setInputSearch] = React.useState("")
  let [input, setInput] = React.useState("")
  let [ipData, setIpData] = React.useState({})
  let [ipOrDomain, setIpOrDomain] = React.useState("ipAddress")
  let [coord, setCoord] = React.useState({lat:null, lng:null}) 
  let [showWarning, setShowWarning] = React.useState(false) 
    
  function handleKeyDown(event){
    if (event.key === "Enter" ) { 
        setInputSearch(event.target.value)
        checkIpOrDomain()
    }
  }
  
  function handleChange(event){
    setInputSearch(event.target.value)
  }
  
  function handleClick(){
    checkIpOrDomain()
  }

  function checkIpOrDomain(){

    if(isIPAddress(inputSearch)){
      setIpOrDomain("ipAddress")
      setInput(inputSearch)
      setShowWarning(false)
    } else if (isValidDomain(inputSearch)){
      setIpOrDomain("domain")
      setInput(inputSearch)
      setShowWarning(false)
    } else if(inputSearch === " " || inputSearch === ""){
      setInput("")
      setShowWarning(false)
    } else {
        console.log("bad request, enter correct ip address")
        setShowWarning(true)
    }
  }
  
  React.useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${ipOrDomain}=${input}`)
      .then(res => res.json())
      .then(data => {
        setIpData(data)
        setCoord(
          {
            lat: data.location.lat,
            lng: data.location.lng
          }
        )
      })
    }, [input, ipOrDomain]) 
  
  return (
    <div className="App">
      <Header 
        inputSearch={inputSearch}
        handleChange={handleChange}
        handleClick={handleClick} 
        handleKeyDown={handleKeyDown} 
        showWarning={showWarning}
      />
      <IpInfo 
        ipData={ipData}
      />
      <Map 
        coord={coord}
      />

    </div>
  );
}

export default App;
