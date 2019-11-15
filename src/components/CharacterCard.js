import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, UncontrolledCollapse
} from 'reactstrap';

export default function CharacterCard(props) {
  let { character } = props;
  return (
    <div key={character.id}>
      <Card className="characterCard">
        <CardHeader className="characterName">{character.name}</CardHeader>
        <CardImg top width="100%" src={character.image}/>
        <CardBody>
          <CardSubtitle><span className="bold">Gender:</span> {character.gender}</CardSubtitle>
          <CardText><span className="bold">Status:</span> {character.status}</CardText>
          <CardText><span className="bold">Species:</span> {character.species}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
