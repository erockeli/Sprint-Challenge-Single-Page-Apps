import React from "react";

export default function CharacterCard() {
  return (
    <div>
    <h2>{props.name}</h2>
    <p>Status: {props.status}</p>
    <p>Gender: {props.gender}</p>
    <p>Species: {props.species}</p>
    <img src={props.image} />
    </div>
    )
}
