import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function SearchForm(props) {

  const [characters, setCharacters] = useState([]);
  const [completeList, setCompleteList] = useState([]);
    let changes = 0;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      // setCharacters(res.data.results);
      console.log(res.data.results);
      setCharacters(res.data.results);
      setCompleteList(res.data.results);
    }).catch(e => console.log(e));
  }, [changes]);
 
  return (
    <section className="search-form">
     <form>
        <label>
        Search
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search for come content!"
              // value={user.name}
              onChange={event => handleChange(event)}
            />
          </div>
        </label>
      </form>
      <div className="generic-list">
      {characters.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />   
          )
      }
      </div>
    </section>
  );
}
