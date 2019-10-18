import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "../components/LocationCard";

export default function LocationsList() {


    const [location, setLocation]= useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get("https://rickandmortyapi.com/api/location/").then(res => {
          // setCharacters(res.data.results);
          console.log(res.data.results);
          setCharacters(res.data.results);
        }).catch(e => console.log(e));
      }, []);

      return (
        <section>
          {location.map(location => 
            
              <LocationCard
                id={location.id}
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents}
              />   
          )
          }
        </section>
      );
    
}
