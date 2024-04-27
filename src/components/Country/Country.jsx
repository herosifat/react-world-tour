import { useState } from 'react';
import './Country.css'
const Country = ({country ,handleVisitedCountry, handleVisitedFlags}) => {
  const {name, flags,population,area} =country;

  const [visited,setVisited] =useState(false)
const handleVisited =() =>{
    setVisited(!visited)
}


    return (
        <div className={`box ${visited && 'visited'} `}>
            <h3>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <h4>Area :{area}</h4>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{ visited ? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this country' :'I want to visit'}
        </div>
    );
};

export default Country;