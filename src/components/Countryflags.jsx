import React from 'react'

const Countryflags = ({countryFlags}) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {countryFlags.map((country, ind) => (
            <div key={ind} style={{height: "200px", width: "200px", border: "3px solid #efefef", borderRadius: "5px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "10px"}}>
            <img src={country.flags.svg} alt={country.flags.alt} height={100}/>
            <h4>{country.name.common}</h4>
            </div>
            
        ))}
    </div>
  )
}

export default Countryflags