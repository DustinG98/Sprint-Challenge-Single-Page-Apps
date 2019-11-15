import React from "react";

export default function CharacterCard(props) {
  let { character } = props;
  return (
    <div key={character.id}>
      <h1>{character.name}</h1>
      <h4>Gender: {character.gender}</h4>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}
