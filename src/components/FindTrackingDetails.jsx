
import { useState } from "react"
import './FindTrackingDetails.css'

function FindTrackingDetails () {
  // const apiKey1 = 'mu3CWB5zYllxwb4it8TWFe1FNdpFBnGV';
    const [demoStatus, setDemoStatus] =useState(false)
    const [searchStatus, setSearchStatus] = useState(false)
    const [parcelFound, setParcelFound] = useState(false)
    const [tempTrackingID, setTempTrackingID] = useState("");
    const apiKey2 = 'kB5vFGIwPb89hewzUDzmvbJPDLCRyByA';
    const[trackingID, setTrackingID] = useState("");
    let trackingInfo;
    const demo1 = "7777777770"
    const demo2 = 8264715546
    const defaultID = {
      "shipments": [
        {
          "id": "00340434292135100186",
          "service": "ecommerce",
          "origin": {
            "address": {
              "countryCode": "US",
              "postalCode": "41048",
              "addressLocality": "HEBRON"
            }
          },
          "destination": {
            "address": {
              "countryCode": "US",
              "postalCode": "89014",
              "addressLocality": "HENDERSON"
            }
          },
          "status": {
            "timestamp": "2023-05-08T10:37:00",
            "location": {
              "address": {
                "countryCode": "US",
                "postalCode": "89014",
                "addressLocality": "Henderson, NV, US"
              }
            },
            "statusCode": "delivered",
            "status": "DELIVERED",
            "description": "DELIVERED - PARCEL LOCKER"
          },
          "details": {
            "product": {
              "productName": "DHL SM Parcel Plus Expedited"
            },
            "weight": {
              "value": 1.352,
              "unitText": "LB"
            },
            "references": [
              {
                "number": "756789",
                "type": "customer-reference"
              },
              {
                "number": "20230fkl87654",
                "type": "customer-confirmation-number"
              },
              {
                "number": "6100050512345",
                "type": "ecommerce-number"
              },
              {
                "number": "936109876h8ikj8",
                "type": "local-tracking-number"
              }
            ]
          },
          "events": [
            {
              "timestamp": "2023-05-08T10:37:00",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "89014",
                  "addressLocality": "Henderson, NV, US"
                }
              },
              "statusCode": "delivered",
              "status": "DELIVERED",
              "description": "DELIVERED - PARCEL LOCKER"
            },
            {
              "timestamp": "2023-05-08T06:10:00",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "89014",
                  "addressLocality": "Henderson, NV, US"
                }
              },
              "statusCode": "transit",
              "status": "OUT FOR DELIVERY"
            },
            {
              "timestamp": "2023-05-08T01:17:00",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "89012",
                  "addressLocality": "Henderson, NV, US"
                }
              },
              "statusCode": "transit",
              "status": "ARRIVAL AT POST OFFICE"
            },
            {
              "timestamp": "2023-05-08T00:02:00",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "89012",
                  "addressLocality": "Henderson, NV, US"
                }
              },
              "statusCode": "transit",
              "status": "ARRIVED USPS SORT FACILITY"
            },
            {
              "timestamp": "2023-05-06T04:18:30",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "90601",
                  "addressLocality": "Whittier, CA, US"
                }
              },
              "statusCode": "transit",
              "status": "TENDERED TO DELIVERY SERVICE PROVIDER"
            },
            {
              "timestamp": "2023-05-05T10:51:20",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "90601",
                  "addressLocality": "Whittier, CA, US"
                }
              },
              "statusCode": "transit",
              "status": "ARRIVAL DESTINATION DHL ECOMMERCE FACILITY"
            },
            {
              "timestamp": "2023-05-03T14:27:32",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "41048",
                  "addressLocality": "Hebron, KY, US"
                }
              },
              "statusCode": "transit",
              "status": "DEPARTURE ORIGIN DHL ECOMMERCE FACILITY"
            },
            {
              "timestamp": "2023-05-03T01:10:21",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "41048",
                  "addressLocality": "Hebron, KY, US"
                }
              },
              "statusCode": "transit",
              "status": "PROCESSED"
            },
            {
              "timestamp": "2023-05-02T19:25:28",
              "location": {
                "address": {
                  "countryCode": "US",
                  "postalCode": "41048",
                  "addressLocality": "Hebron, KY, US"
                }
              },
              "statusCode": "transit",
              "status": "PACKAGE RECEIVED AT DHL ECOMMERCE DISTRIBUTION CENTER"
            },
            {
              "timestamp": "2023-05-01T14:11:21",
              "statusCode": "pre-transit",
              "status": "EN ROUTE TO DHL ECOMMERCE OR AWAITING PROCESSING"
            },
            {
              "timestamp": "2023-05-01T14:05:23",
              "statusCode": "pre-transit",
              "status": "DHL ECOMMERCE CURRENTLY AWAITING SHIPMENT AND TRACKING WILL BE UPDATED" 
            },
            {
              "timestamp": "2023-05-01T10:02:48",
              "statusCode": "unknown",
              "status": "LABEL CREATED"
            }
          ]
        }
      ]
    }
    const latestEvent = defaultID.shipments[0].events[0]

    // console.log("demo status", demoStatus)
    // console.log("search status", searchStatus)
    // console.log("parcel found", parcelFound)
    // console.log('trackingID',trackingID)
    // console.log("-------------------------")
  
   const grabTrackingDetails = async () => {
    console.log("where??")
      const res = await fetch(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingID}&language=en&offset=0&limit=5`, {
        method: 'GET',
        headers: {
          'accept' : 'application/json',
          'DHL-API-Key': apiKey2
        }
      })
      if (res.ok) {
        trackingInfo = await res.json();
        setParcelFound(true)
      } else {
        setParcelFound(false)
      }
    }
  
    // useEffect(()=> {
    // },[trackingID, demoStatus, searchStatus, parcelFound ])
  
    const handleTrackingIdChange = (e) => {
     setTempTrackingID(e.target.value)
    }

    const handleSearch = () => {
      setDemoStatus(false)
      setSearchStatus(true)
      setTrackingID(tempTrackingID)
      setTempTrackingID("")
      grabTrackingDetails()
    }

    const handleDemoSearch1 = () => {
      // setParcelFound(false)
      setDemoStatus(true)
      setSearchStatus(false)
      setTrackingID(demo1)
    }

    const handleDemoSearch2 = () => {
      // setParcelFound(false)
      setSearchStatus(false)
      setDemoStatus(true)
      setTrackingID(demo2)
    }

    const handleClearAll = () => {
     setDemoStatus(false)
     setParcelFound(false)
     setSearchStatus(false)
     setTempTrackingID("")
     setTrackingID("")
    }

  
    return (
      <div className="tracking-page">
        <div className="header"> Get the latest update on your parcel: 
          <input type="text" value={tempTrackingID} placeholder="Enter tracking ID" onChange={handleTrackingIdChange} />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleDemoSearch1} >Demo Search #1</button>
          <button onClick={handleDemoSearch2}>Demo Search #2</button>
          <button onClick={handleClearAll}>Clear All</button>
        </div>
        {demoStatus ? // if the demo buttons are clicked it displays the latest status for those
        <>
          <div className="title">Here are the lastest details for ID #{trackingID}</div>
          <div className="parcel-details">
            <div>Status: {latestEvent.status}</div>
            <div className="event-details">Shipping address: {latestEvent.location.address.addressLocality} {latestEvent.location.address.postalCode}</div>
            <div className="event-details">{latestEvent.status} as of {latestEvent.timestamp}</div>
          </div>
        </> : null}
        {searchStatus && parcelFound ? // if user enters in a tracking ID and it is found, it should display the latest status 
        <>
           <div className="title">Here are the lastest details for ID #{trackingID}</div>
          <div className="parcel-details">
            <div>Status: {trackingInfo.status}</div>
            <div className="event-details">Shipping address: {trackingInfo.location.address.addressLocality} {trackingInfo.location.address.postalCode}</div>
            <div className="event-details">{trackingInfo.status} as of {trackingInfo.timestamp}</div>
          </div>
        </> : null} 
        {searchStatus && !parcelFound ? // if a user searches but nothing is found
        <>
          <div className="unsuccessful-search"> Sorry, no parcel found for ID #{trackingID} 😭</div>  
        </>
        : null } 
      </div>
  
    )
}

export default FindTrackingDetails


// Task:
// Your task now is to explore the Shipment Tracking-Unified Rest API documentation and
// develop a function that will return the tracking information of a package by a tracking
// number. Please use one of the following default tracking numbers to test your function:
// 7777777770 OR 8264715546

// The function should take as inputs the following parameters:
// Tracking Number - the tracking number of the package to be tracked
// API Key - credentials to authenticate with the API
// The function must return the last tracking event.




