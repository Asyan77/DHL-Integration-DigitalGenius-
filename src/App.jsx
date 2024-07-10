import { useEffect } from "react"

function App() {

  const url = 'https://api-eu.dhl.com/track/shipments'
  const apiKey = 'mu3CWB5zYllxwb4it8TWFe1FNdpFBnGV'
  const apiSecretKey = 'oVy0tFitrc56rjhn'
  // const trackingID = '7777777770'
  const trackingID = '8264715546'
  let trackingInfo;




 const grabTrackingDetails = async () => {
    const res = await fetch(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingID}`, {
      method: 'GET',
      headers: {
        'DHL-API-Key': apiKey,
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${apiSecretKey}`
      }
    })

    if (res.ok) {
      console.log(res)
      trackingInfo = await res.json()
      return trackingInfo
    }
  }

  useEffect(()=> {
    grabTrackingDetails()
  },[grabTrackingDetails])

  return (
    <div>
      {trackingInfo}
    </div>

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