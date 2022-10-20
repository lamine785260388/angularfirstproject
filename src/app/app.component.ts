import { Pokemon } from './pokemon';
import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit{
  pokemonlist:Pokemon[]= POKEMONS;//signifie pokemonliste de type tableau de pokemon
  ngOnInit(): void {
    console.table(this.pokemonlist);


  }//nous permet d'exporter notre component pour le rendre disponible

selectPokemon(event:MouseEvent){
  const index : number=+(event.target as HTMLInputElement).value;
  console.log(`vous avez cliqué sur le pokémon ${this.pokemonlist[index].name} `);

};

}


