import {useState, useEffect} from "react" 
import axios from "axios"
import {Link} from "react-router-dom"


function HomePage() {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries').then((oneCountry)=>{
        console.log(oneCountry.data)
        setCountries(oneCountry.data)
        })
        .catch((err)=>{
console.log(err)
        })
    },[])

    return (
    <div className="container">
    <h1>WikiCountries</h1>
   {countries.map((country)=>{
    return (
        <div key={country._id} className="list-group">
        <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=""/>
        <p>{country.name.common}</p>
        </Link>
        </div>
    )
   })}
    


    </div>
    )
}

export default HomePage;
