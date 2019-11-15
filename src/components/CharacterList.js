import React, { useEffect, useState } from "react";
import axios from 'axios'

import SearchForm from './SearchForm'
import { Button } from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  let newCharacters = [];

  const setNewCharacters = (newCharacter) => {
    setCharacters([]);
    setCharacters([newCharacter])
  }
  const [page, setPage] = useState(1);

  if(page === 0){
    setPage(20);
  } else if(page > 20){
    setPage(1);
  }
  

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => 
          setCharacters(response.data.results))
        .catch(err => console.log("Error", err))
        
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [page]);

  console.log(characters)

  return (
    <section className="character-list">
      <h1>Characters</h1>
      <SearchForm characters={characters} setNewCharacters={setNewCharacters}/>
      <div className="buttons">
        <Button className="pageButton" color="primary" onClick={() => setPage(page-1)} >Previous Page</Button>
        <h1>{page}</h1>
        <Button className="pageButton" color="primary" onClick={() => setPage(page+1)}>Next Page</Button>
      </div>
    </section>
  );
}
