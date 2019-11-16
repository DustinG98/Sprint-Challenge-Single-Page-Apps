import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios'


export default function SearchForm(props) {
  const { characters } = props
  const [searchTerm, setSearchTerm] = useState("");
  const [newCharacters, setNewCharacters] = useState([])
  const [searchResult, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  useEffect(() => {
      const result = characters.filter(character => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setNewCharacters(result)
      axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then(response => {
        setSearchResults(response.data.results)
      })
    
  }, [searchTerm, characters])
  
  return (
    <section className="search-form">
     <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="characters">
        {(searchTerm === "") ? newCharacters.map(character => {
          return <div> <CharacterCard key={character.id} character={character}/> </div>
        }) : searchResult.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        }) }
      </div>
    </section>
  );
}
