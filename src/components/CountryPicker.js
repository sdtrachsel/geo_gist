import React from "react"
import { countryOptions } from "../country-options";

export const CountryPicker = ({ selectedCountry, setSelectedCountry }) => {
  const countries = countryOptions.map((country, index) => {
    return <option key={index} value={country.code}>{country.country}</option>
  })

  return (
    <select name="country" id="country" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
      {countries}
    </select>
  )
}