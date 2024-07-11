
import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [trackingID, setTrackingID] = useState(null);
  const apiKey1 = 'mu3CWB5zYllxwb4it8TWFe1FNdpFBnGV';
  const apiKey2 = 'kB5vFGIwPb89hewzUDzmvbJPDLCRyByA';
  // const trackingID1 = '7777777770'
  // const trackingID2 = '8264715546'
  let trackingInfo;
  
  
  


 const grabTrackingDetails = async () => {
    const res = await fetch('https://api-eu.dhl.com/track/shipments?trackingNumber=7777777770', {
      method: 'GET',
      headers: {
        'DHL-API-Key': apiKey2
      }
    })
    if (res.ok) {
      trackingInfo = await res.json();
      console.log(trackingInfo);
    } else {
      console.log(res);
    }
  }

  useEffect(()=> {
    grabTrackingDetails(trackingID)
  },[trackingID])

  const updateToTrackingId1 = () => {
    if (trackingID !== trackingID1 ) {
      setTrackingID(trackingID1)
    }
  }

  const updateToTrackingId2 = () => {
    if (trackingID !== trackingID2 ) {
      setTrackingID(trackingID2)
    }
  }

  return (
    <>
      <div className="header"> Select the tracking ID you would like to view: 
        <button onClick={updateToTrackingId1}>7777777770</button>
        <button onClick={updateToTrackingId2}>8264715546</button>
      </div>
      {trackingInfo}
    </>

  )
}

export default App;


// Task:
// Your task now is to explore the Shipment Tracking-Unified Rest API documentation and
// develop a function that will return the tracking information of a package by a tracking
// number. Please use one of the following default tracking numbers to test your function:
// 7777777770 OR 8264715546

// The function should take as inputs the following parameters:
// Tracking Number - the tracking number of the package to be tracked
// API Key - credentials to authenticate with the API
// The function must return the last tracking event.

// Extra Task:
// Explore the DHL APIs and implement a function to get and return the list of all DHL service
// point locations within the specified radius from the given address.
// The function should take as inputs the following parameters:
// Country code - the country where you want to find DHL service points
// City - the city found in the output of the previous task
// Radius - the function should work even if the value of this input is null