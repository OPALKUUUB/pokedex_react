# This a project that learn about react
##### Lesson 1
```js
import react, { Component } from "react";

class Pokedex extends Component{
  static defaultProps = {
    pokemon: [
      {id: 1, item: pokemon_1},
      {id: 2, item: pokemon_2},
      {id: 3, item: pokemon_3},
    ]
  }
  render() {
    return (
    <div>
      {this.props.pokemon.map( p => (
        <li key={p.id}>{p.item}</li>
      ))}
    </div>
    );
  }
}
export default Pokedex;
```
map is duty like for each and this function must identify key property(below the line that use map). </br>
And "p=>(item)" mean that arrow that return. It's can code -> "p=>{return item}" </br>
