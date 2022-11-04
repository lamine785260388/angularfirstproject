import { Router } from '@angular/router';
import { Pokemon } from './pokemon/pokemon';
import { Component } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent{
  pokemonlist:Pokemon[]= POKEMONS;//signifie pokemonliste de type tableau de pokemon
constructor(private router:Router){

}

}


