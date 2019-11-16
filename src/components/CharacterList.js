import React, { useState } from "react";
import { Button } from 'reactstrap';
import SearchForm from './SearchForm'


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [page, setPage] = useState(1);



  return (
    <section className="character-list">
      <h1>Characters</h1>
      <SearchForm page={page} setPage={setPage}/>
      <div className="buttons">
          <Button className="pageButton" color="primary" onClick={() => setPage(page-1)} >Previous Page</Button>
          <h1>{page}</h1>
          <Button className="pageButton" color="primary" onClick={() => setPage(page+1)}>Next Page</Button>
        </div>
    </section>
  );
}
