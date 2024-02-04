import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function CountryDetails() {
    const { alpha3 } = useParams();
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3}`)
          .then((oneCountry) => {
            console.log(oneCountry.data);
            setCountries(oneCountry.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [alpha3]);

      return(
        <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
        {countries.length === 0 && <p>Loading Data..</p>}
        {countries.length !== 0 && (
          <div >
            <div>
              <img
                src={` https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <h4>{countries.name.common}</h4>
              <p>
                <span className="label">Capital</span>:{" "}
                {countries.capital[0]}
              </p>
              <p>
                <span className="label">Area:</span> {countries.area}km²
              </p>
            </div>
            <div className="borders">
              <p>Borders:</p>
              {countries.borders.map((border) => {
                return (
                  <Link
                    key={border}
                    to={`/${border}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="borderP"> {border} </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );      
}

export default CountryDetails;
