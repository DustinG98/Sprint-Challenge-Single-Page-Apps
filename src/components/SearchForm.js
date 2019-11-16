import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios'


export default function SearchForm(props) {
  const { characters, page, setPage } = props
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResults] = useState([]);



  


  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`)
      .then(response => {
        setSearchResults(response.data.results)
        console.log(response)
        if(page === 0){
          setPage(response.data.info.pages);
        } else if(page > response.data.info.pages){
          setPage(1);
        }
      })
    
  }, [searchTerm, characters, page, setPage])
  
  return (
    <section className="search-form">
     <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="characters">
        {searchResult.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        }) }
      </div>
    </section>
  );
}
