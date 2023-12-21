import React from "react";

const POKE_API = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard({id, name, type, exp}) {
    let imgSrc = `${POKE_API}${id}.png`;

    return (
        <div className="Pokecard">
            <h5 className="Pokecard-name">{name}</h5>
            <img src={imgSrc} className="Pokecard-img" alt="Pokemon" />
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-exp">Exp: {exp}</p>
        </div>
    );
}

export default Pokecard;