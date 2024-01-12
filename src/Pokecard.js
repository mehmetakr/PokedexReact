import React, { Component } from "react";
import Pokedex from "./Pokedex";
const poke_api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class Pokecard extends Component {
  render() {
    let imgsrc = `${poke_api}${this.props.id}.png`;
    return (
        
      <div className="pokecard">
        <h1 className="pokecard-title">{this.props.name} </h1>
        <div className="pokecard-img">
          <img src={imgsrc} alt={this.props.name} />
        </div>
        <div className="pokecard-type">type: {this.props.type}
        <div className="" >  Exp : {this.props.exp}</div>

        </div>
      </div>
    );
  }
}
export default Pokecard;
