import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const { characters } = props
  const [searchTerm, setSearchTerm] = useState("");
  const [newCharacters, setNewCharacters] = useState([])
  
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  const result = [];
  useEffect(() => {
      characters.forEach(cv => {
        if(cv.name !== undefined) {
          return cv.name.toLowerCase().includes(searchTerm.toLowerCase()) ? result.push(cv) : null
        }
      })
    
    setNewCharacters(result)
  }, [searchTerm])
  
  return (
    <section className="search-form">
     <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="characters">
        {(searchTerm === "") ? characters.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        }) : newCharacters.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        })}
      </div>
    </section>
  );
}
