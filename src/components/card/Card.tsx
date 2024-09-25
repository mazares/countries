import "./Card.css";

export default function Card({country}: any) {
  return <div className="card">
    <img src={country.flags.svg} /> 
    <div className="card-body">
      <h3>{country.name.common}</h3>

      <p>Capital: {country.capital}</p>
      <p>Region :{country.region}</p>

      <p>Population: {country.population}</p>
    </div>
  </div>
};
