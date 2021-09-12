import React, { Component } from 'react';
import "./Pokecard.css";
// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
function pad2Three(item) {
    var str = `00${item}`;
    return str.slice(-3)
}

class Pokecard extends Component {
    render() {
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <img className="Pokecard-image" src={`${POKE_API}${pad2Three(this.props.id)}.png`} alt=""/>
                <div className="Pokecard-data">
                    <p>Type: {this.props.type}</p>
                    <p>EXP: {this.props.exp}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;