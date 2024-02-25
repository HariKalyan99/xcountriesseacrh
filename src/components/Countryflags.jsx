import React from 'react'
import styles from './Countryflags.module.css';

const Countryflags = ({countryFlags}) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {countryFlags.map((country, ind) => (
            <div key={ind} className={styles.countryCard} >
            <img src={country.flags.svg} alt={country.flags.alt} height={100}/>
            <h2>{country.name.common}</h2>
            </div>
            
        ))}
    </div>
  )
}

export default Countryflags