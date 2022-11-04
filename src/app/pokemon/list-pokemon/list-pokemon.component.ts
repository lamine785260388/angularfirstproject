
import { PokemonService } from './../pokemon.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',

})
export class ListPokemonComponent implements OnInit  {
  pokemonlist:Pokemon[];
constructor(private router:Router,private PokemonService:PokemonService){

}
ngOnInit(): void {
   this.pokemonlist=this.PokemonService.getPokemonList(); 
}
  goToPokemon(pokemon:Pokemon){
   
    this.router.navigate(['/pokemons',pokemon.id])
    }


}
