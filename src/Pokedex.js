import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;