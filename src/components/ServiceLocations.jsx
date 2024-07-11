import { useEffect, useState } from 'react';
import './ServiceLocations.css'

function ServiceLocations () {
    // const apiKey1 = 'mu3CWB5zYllxwb4it8TWFe1FNdpFBnGV';
    const apiKey2 = 'kB5vFGIwPb89hewzUDzmvbJPDLCRyByA';
    const options = {method: 'GET', headers: {'DHL-API-Key': apiKey2}};
    const [countryCode, setCountryCode] = useState("");
    const [city, setCity] = useState("")
    const [radius, setRadius] = useState(50);
    let locationList;

    const searchByCountry = async () => {
       const res = await fetch('https://api.dhl.com/location-finder/v1/find-by-address?countryCode=US', options)
        if (res.ok) {
            locationList = await res.json();
            console.log(locationList)
            console.log('its all ok')
        }

    }

    useEffect(()=> {
    },[countryCode])

    const handleCountryChange = (e)=> {
        setCountryCode(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleRadiusChange = (e) => {
        setRadius(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchByCountry()
    }


 return (
    <div className='main-page'>
        <div className='header'>Need to ship? Find the nearest DHL service point</div>
        <form className='search-form' action="">
          <label htmlFor="country">Two-letter country code</label>
          <input type="text" name='country' value={countryCode} placeholder='TW' onChange={handleCountryChange} required/>
          <label htmlFor="city">City</label>
          <input type="text" value={city} name='city' placeholder='Taipei' onChange={handleCityChange} required/>
          <label htmlFor="radius"> Radius in miles (optional - max of 2500)</label>
          <input type="number" name='radius' value={radius} placeholder='25' onChange={handleRadiusChange} max='2500'/>
          <button onSubmit={handleSubmit}>Find Service Locations</button>  
        </form>


        {locationList}
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