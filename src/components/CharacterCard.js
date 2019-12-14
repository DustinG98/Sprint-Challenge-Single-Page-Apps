import React from "react";
import {
  Card, CardImg, CardText, CardBody,
   CardSubtitle, CardHeader
} from 'reactstrap';

export default function CharacterCard(props) {
  let { character } = props;
  return (
    <div key={character.id}>
      <Card className="characterCard">
        <CardHeader className="characterName">{character.name}</CardHeader>
        <CardImg className="cardImg" top width="100%" src={character.image}/>
        <CardBody>
          <CardSubtitle className="cardDetails"><span className="bold">Gender:</span> {character.gender}</CardSubtitle>
          <CardText className="cardDetails"><span className="bold">Status:</span> {character.status}</CardText>
          <CardText className="cardDetails"><span className="bold">Species:</span> {character.species}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
