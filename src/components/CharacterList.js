import React, { useEffect, useState } from "react";
import axios from 'axios'

import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  let newCharacters = [];

  const setNewCharacters = (newCharacter) => {
    setCharacters([]);
    setCharacters([newCharacter])
  }
  

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
        .then(response => 
          setCharacters(response.data.results))
        .catch(err => console.log("Error", err))
        
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(characters)

  return (
    <section className="character-list">
      <SearchForm characters={characters} setNewCharacters={setNewCharacters}/>
    </section>
  );
}
