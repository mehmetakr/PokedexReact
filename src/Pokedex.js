import Pokecard from "./Pokecard";
import React, { Component } from "react";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.iswinner) {
      title = <h2 className="winner">Winnig player</h2>;
    } else {
      title = <h2 className="loser">Loser Player</h2>;
    }

    return (
      <div className="pokedex">
        <h4>Total Experience : {this.props.exp}</h4>
        {title}
        <div className="pokedex-card">
          {this.props.pokemon.map((p) => (
            <Pokecard
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
