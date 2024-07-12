import { useState } from 'react';
import './ServiceLocations.css'
import LocationDetails from './LocationDetails';

function ServiceLocations () {
    // const apiKey1 = 'mu3CWB5zYllxwb4it8TWFe1FNdpFBnGV';
    const apiKey2 = 'kB5vFGIwPb89hewzUDzmvbJPDLCRyByA';
    const options = {method: 'GET', headers: {'DHL-API-Key': apiKey2}};
    const [countryCode, setCountryCode] = useState("");
    const [city, setCity] = useState("")
    const [radius, setRadius] = useState("");
    const [selectedServiceType, setSelectedServiceType] = useState("");
    const [searchStatus, setSearchStatus] = useState(false)
    const [locationList, setLocationList] = useState({})


    const searchByCountry = async () => {
       const res = await fetch(`https://api.dhl.com/location-finder/v1/find-by-address?countryCode=${countryCode.toUpperCase()}&addressLocality=${city}&providerType=express&locationType=servicepoint&serviceType=${selectedServiceType}&limit=20&hideClosedLocations=false`, options)
        if (res.ok) {
            const temp = await res.json();
            setSearchStatus(true);
            setLocationList(temp);
            setCity("");
            setCountryCode("");
            setRadius("");
            setSelectedServiceType("")
            }
            
        }
    // const editCityName = () => {
    //     let words = city.split(" ")
    //     if (words.length === 1) {
    //          setCity(words[0][0].toUpperCase() + words[0].slice(1).toLowerCase)
    //     } else {
    //         return words.map(word => {
    //             word[0].toUpperCase() + word.slice(1).toLowerCase();
    //         })
    //     }
    // }

    console.log(countryCode)

    const handleCountryChange = (e)=> {
        setCountryCode(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleChange = (event) => {
        setSelectedServiceType(event.target.value);
      };

    const handleRadiusChange = (e) => {
        setRadius(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // editCityName(city)
        searchByCountry()
    }

    const handleClearResults = () => {
        setSearchStatus(false)
    }

 return (
    <div className='main-page'>
        <div className='header'>Need to ship? Find the nearest DHL service point</div>
        <form className='search-form' onSubmit={handleSubmit} action="">
          <label htmlFor="country">Two-letter country code</label>
          <input type="text" name='country' value={countryCode} placeholder='TW' onChange={handleCountryChange} required/>
          <label htmlFor="city">City</label>
          <input type="text" value={city} name='city' placeholder='Taipei' onChange={handleCityChange} required/>
          <label htmlFor="options">Service Type:</label>
          <select id="options" value={selectedServiceType} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="parcel%3Apick-up-all">Parcel pick up</option>
            <option value="parcel%3Adrop-off-all">Parcel drop-off</option>
            <option value="express%3Apick-up">Express pick up</option>
            <option value="express%3Adrop-off">Express drop-off</option>
          </select>
          <label htmlFor="radius"> Radius in meters (optional - max of 2500)</label>
          <input type="number" name='radius' value={radius} placeholder='50' onChange={handleRadiusChange} max='2500'/>
          <button type='submit'>Find Service Locations</button>  
          <button onClick={handleClearResults}>Clear Results</button>

        </form>

        {searchStatus ?
        <LocationDetails details={locationList}/>
        : null }
    </div>
 )
}

export default ServiceLocations


// Extra Task:
// Explore the DHL APIs and implement a function to get and return the list of all DHL service point locations within the specified radius from the given address.
// The function should take as inputs the following parameters:
// Country code - the country where you want to find DHL service points
// City - the city found in the output of the previous task
// Radius - the function should work even if the value of this input is null