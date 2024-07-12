
import './LocationDetails.css'

const LocationDetails = ({details}) => {
    // const dummyDetails = {
    //     "locations": [
    //       {
    //         "url": "/locations/8055-ES-0005984",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "8055-ES-0005984",
    //               "provider": "parcel"
    //             },
    //             {
    //               "locationId": "BCN6FB",
    //               "provider": "express"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "106",
    //           "type": "servicepoint"
    //         },
    //         "name": "EXTRA GLOBAL BUSINESS",
    //         "distance": 1437,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08018",
    //             "addressLocality": "BARCELONA",
    //             "streetAddress": "CARRER JOAN I 8"
    //           },
    //           "geo": {
    //             "latitude": 41.40725,
    //             "longitude": 2.187219
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Saturday"
    //           }
    //         ],
    //         "closurePeriods": [],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "parcel:drop-off-unlabeled",
    //           "handicapped-access",
    //           "express:drop-off",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off",
    //           "express:drop-off-easy",
    //           "franking",
    //           "express:drop-off-account",
    //           "cash-service"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       },
    //       {
    //         "url": "/locations/8055-ES-0006572",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "BCN7VB",
    //               "provider": "express"
    //             },
    //             {
    //               "locationId": "8055-ES-0006572",
    //               "provider": "parcel"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "114",
    //           "type": "servicepoint"
    //         },
    //         "name": "MOVIL TECH",
    //         "distance": 1569,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08020",
    //             "addressLocality": "Sant Martí,",
    //             "streetAddress": "Gran Via de les Corts Catalanes, 1048"
    //           },
    //           "geo": {
    //             "latitude": 41.4137,
    //             "longitude": 2.20121
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "17:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "17:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "17:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "17:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "17:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "10:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Saturday"
    //           },
    //           {
    //             "opens": "17:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Saturday"
    //           }
    //         ],
    //         "closurePeriods": [],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "express:drop-off",
    //           "express:drop-off-account",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off",
    //           "express:drop-off-easy",
    //           "franking"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       },
    //       {
    //         "url": "/locations/8055-ES-0004079",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "8055-ES-0004079",
    //               "provider": "parcel"
    //             },
    //             {
    //               "locationId": "BCN45B",
    //               "provider": "express"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "104",
    //           "type": "servicepoint"
    //         },
    //         "name": "TABACS FRESER",
    //         "distance": 2238,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08026",
    //             "addressLocality": "BARCELONA",
    //             "streetAddress": "FRESER 126"
    //           },
    //           "geo": {
    //             "latitude": 41.41314,
    //             "longitude": 2.181256
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "08:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "16:00:00",
    //             "closes": "20:30:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "08:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "16:00:00",
    //             "closes": "20:30:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "08:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "16:00:00",
    //             "closes": "20:30:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "08:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "16:00:00",
    //             "closes": "20:30:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "08:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "16:00:00",
    //             "closes": "20:30:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Saturday"
    //           }
    //         ],
    //         "closurePeriods": [
    //           {
    //             "type": "holiday",
    //             "fromDate": "2024-08-02",
    //             "toDate": "2024-08-25"
    //           }
    //         ],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "parcel:drop-off-unlabeled",
    //           "handicapped-access",
    //           "express:drop-off",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off",
    //           "express:drop-off-easy",
    //           "franking",
    //           "express:drop-off-account",
    //           "cash-service"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       },
    //       {
    //         "url": "/locations/8055-ES-0000280",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "8055-ES-0000280",
    //               "provider": "parcel"
    //             },
    //             {
    //               "locationId": "BCN18B",
    //               "provider": "express"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "101",
    //           "type": "servicepoint"
    //         },
    //         "name": "COPYDRANA",
    //         "distance": 2253,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08013",
    //             "addressLocality": "BARCELONA",
    //             "streetAddress": "CALLE SICILIA 278 B"
    //           },
    //           "geo": {
    //             "latitude": 41.40124,
    //             "longitude": 2.174208
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "09:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "14:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "19:30:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           }
    //         ],
    //         "closurePeriods": [],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "parcel:drop-off-unlabeled",
    //           "handicapped-access",
    //           "express:drop-off",
    //           "express:drop-off-account",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off",
    //           "express:drop-off-easy",
    //           "franking"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       },
    //       {
    //         "url": "/locations/8055-ES-0006076",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "BCN7PB",
    //               "provider": "express"
    //             },
    //             {
    //               "locationId": "8055-ES-0006076",
    //               "provider": "parcel"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "106",
    //           "type": "servicepoint"
    //         },
    //         "name": "BIZ SERVICES",
    //         "distance": 3444,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08001",
    //             "addressLocality": "BARCELONA",
    //             "streetAddress": "CARRER CARMEN 70"
    //           },
    //           "geo": {
    //             "latitude": 41.38101,
    //             "longitude": 2.168071
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "09:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "09:00:00",
    //             "closes": "21:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           }
    //         ],
    //         "closurePeriods": [],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "parcel:drop-off-unlabeled",
    //           "handicapped-access",
    //           "express:drop-off",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off",
    //           "express:drop-off-easy",
    //           "franking",
    //           "express:drop-off-account",
    //           "cash-service"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       },
    //       {
    //         "url": "/locations/8055-ES-0000254",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "8055-ES-0000254",
    //               "provider": "parcel"
    //             },
    //             {
    //               "locationId": "BCN07B",
    //               "provider": "express"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "101",
    //           "type": "servicepoint"
    //         },
    //         "name": "DHL EXPRESS CENTER VIA AUGUSTA",
    //         "distance": 3945,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08006",
    //             "addressLocality": "BARCELONA",
    //             "streetAddress": "VIA AUGUSTA 40"
    //           },
    //           "geo": {
    //             "latitude": 41.39805,
    //             "longitude": 2.15392
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "15:00:00",
    //             "closes": "19:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "15:00:00",
    //             "closes": "19:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "15:00:00",
    //             "closes": "19:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "15:00:00",
    //             "closes": "19:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "09:30:00",
    //             "closes": "13:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "15:00:00",
    //             "closes": "19:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           }
    //         ],
    //         "closurePeriods": [
    //           {
    //             "type": "holiday",
    //             "fromDate": "2022-11-05",
    //             "toDate": "2025-12-31"
    //           }
    //         ],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "express:drop-off-easy",
    //           "express:drop-off",
    //           "express:drop-off-account",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       },
    //       {
    //         "url": "/locations/8055-ES-0001312",
    //         "location": {
    //           "ids": [
    //             {
    //               "locationId": "8055-ES-0001312",
    //               "provider": "parcel"
    //             },
    //             {
    //               "locationId": "BCN1RB",
    //               "provider": "express"
    //             }
    //           ],
    //           "keyword": "DHL Servicepoint",
    //           "keywordId": "101",
    //           "type": "servicepoint"
    //         },
    //         "name": "ESTANC 35 BADALONA",
    //         "distance": 4813,
    //         "place": {
    //           "address": {
    //             "countryCode": "ES",
    //             "postalCode": "08914",
    //             "addressLocality": "BADALONA",
    //             "streetAddress": "CARRETERA ANTIGUA DE VALENCIA 28"
    //           },
    //           "geo": {
    //             "latitude": 41.43886,
    //             "longitude": 2.225375
    //           }
    //         },
    //         "openingHours": [
    //           {
    //             "opens": "08:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "20:00:00",
    //             "dayOfWeek": "http://schema.org/Monday"
    //           },
    //           {
    //             "opens": "08:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "20:00:00",
    //             "dayOfWeek": "http://schema.org/Tuesday"
    //           },
    //           {
    //             "opens": "08:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "20:00:00",
    //             "dayOfWeek": "http://schema.org/Wednesday"
    //           },
    //           {
    //             "opens": "08:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "20:00:00",
    //             "dayOfWeek": "http://schema.org/Thursday"
    //           },
    //           {
    //             "opens": "08:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "16:30:00",
    //             "closes": "20:00:00",
    //             "dayOfWeek": "http://schema.org/Friday"
    //           },
    //           {
    //             "opens": "08:30:00",
    //             "closes": "13:30:00",
    //             "dayOfWeek": "http://schema.org/Saturday"
    //           }
    //         ],
    //         "closurePeriods": [],
    //         "serviceTypes": [
    //           "parcel:pick-up",
    //           "parcel:drop-off-unlabeled",
    //           "express:drop-off",
    //           "express:drop-off-account",
    //           "express:pick-up",
    //           "express:drop-off-prelabeled",
    //           "parcel:drop-off",
    //           "express:drop-off-easy",
    //           "franking"
    //         ],
    //         "averageCapacityDayOfWeek": []
    //       }
    //     ]
    //   }
    
    // let streetAddress = location.place.address.streetAddress
    // let city = location.place.address.addressLocality
    // let country = location.place.address.countryCode
    // let postalCode = location.place.address.postalCode

    //   const dummyList = dummyDetails.locations
      const realList = details.locations;

      return (
        <>
            <div className='list-title'> Search Results: </div>
            <ul className="store-list">
            {realList.map(location => {
                return (
                    <div className="single-store" key={location.location.ids[0].locationId}>
                        {/* <Link to={}>{location.name}</Link> */}
                        <div className="store-name">{location.name}</div>
                        <div className="store-address">{location.place.address.streetAddress}</div>
                        <div className="store-address">{location.place.address.addressLocality} {location.place.address.countryCode} {location.place.address.postalCode}</div>
                    </div>
                )
                })}
            </ul>
        </>

      )

}

export default LocationDetails
