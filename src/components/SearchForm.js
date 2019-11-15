import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const { characters } = props
  const [searchTerm, setSearchTerm] = useState("");
  const [newCharacters, setNewCharacters] = useState([])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  useEffect(() => {
      const result = characters.filter(character => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    
    setNewCharacters(result)
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
        {newCharacters.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        })}
      </div>
    </section>
  );
}
