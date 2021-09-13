import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <div style={{ textAlign: "center" }}>
                    {this.props.winner ? <h2 className="Pokedex-winner">Winner</h2> : <h2 className="Pokedex-lose">Lose</h2>}
                </div>
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