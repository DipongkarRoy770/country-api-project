import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "./SingleCountry";


const Countrys = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center font-bold underline">
                Rest Countrys API project
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-5"> 
            {
                country.map(country=><SingleCountry
                key={country.cca3}
                country={country}
                ></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Countrys;