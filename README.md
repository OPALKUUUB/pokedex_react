# This a project that learn about react
<img src="https://user-images.githubusercontent.com/63914959/133018223-85e046d2-5051-47c1-8b24-91cd3741eb46.png" width="60%">
When you refresh this page the pokedex on hand1 and hand2 will random and total the exp of each hand the greater will winner.

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
##### Other lesson it's so basic for me!
