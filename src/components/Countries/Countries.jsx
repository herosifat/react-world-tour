import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries,setContries] =useState([]);
    const [visitedCountries,setVisitedCountries] =useState([]);
    const [visitedFlags ,setVisitedFlags] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setContries(data))
    },[])

    const handleVisitedCountry = country =>{
        // console.log('Add to your visited country');
        const newVisitedCountry =[...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
     

    }

    const handleVisitedFlags =flags =>{
        // console.log('flags adding')
        const newVisitedflags =[...visitedFlags ,flags];
        setVisitedFlags(newVisitedflags);
    }
    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            
            <div>
                <h5>Visited countries:{visitedCountries.length}</h5>
                <ul>
                    {
                      visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flags ,idx) => <img key={idx} src={flags}></img>)
                }

            </div>
            <div className="country-container">
            {
                countries.map(country => <Country
                handleVisitedCountry ={handleVisitedCountry}
                handleVisitedFlags ={handleVisitedFlags}
                     key={country.cca3}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;