import { Pokemon } from './pokemon';
import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit{
  pokemonlist:Pokemon[]= POKEMONS;//signifie pokemonliste de type tableau de pokemon
 pokemonSelected:Pokemon|undefined;
  ngOnInit(): void {
    console.table(this.pokemonlist);



  }//nous permet d'exporter notre component pour le rendre disponible

selectPokemon(Pokemonid:string){
const pokemon:Pokemon|undefined=this.pokemonlist.find(pokemon=>pokemon.id==+Pokemonid);
  if(pokemon){
    console.log(`vous avez cliqué sur le pokémon ${pokemon.name} `);
    this.pokemonSelected=pokemon;
  }
  else{
    console.log("vous avez demandé un pokemon qui n'existe pas ");
    this.pokemonSelected=pokemon;
  }


};

}


