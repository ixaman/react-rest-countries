import React from 'react';
import './Country.css';

const Country = (props) => {
   const {name,capital,flag,population,region} = props.country;
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h3>{name}</h3>
            <p><strong>Capital:</strong> {capital} <strong>Region:</strong> {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;