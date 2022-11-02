import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',

})
export class ListPokemonComponent  {
  pokemonlist:Pokemon[]= POKEMONS;
constructor(private router:Router){

}
  goToPokemon(pokemon:Pokemon){
   
    this.router.navigate(['/pokemons',pokemon.id])
    }


}
