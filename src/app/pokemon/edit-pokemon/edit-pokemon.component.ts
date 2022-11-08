import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
   <h2 class="center">Editer {{pokemon?.name}}</h2>
   <p class='center' *ngIf="pokemon">
    <img [src]='pokemon.picture'>
   </p>
   
 
 <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon">
 
 </app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon:Pokemon|undefined;

  constructor(
    private route:ActivatedRoute,
    private pokemonService:PokemonService,
  ) { }

  ngOnInit(){
const pokemonid:string|null=this.route.snapshot.paramMap.get('id');
if(pokemonid){
  this.pokemon=this.pokemonService.getPokemonById(+pokemonid);
}
else{
  this.pokemon=undefined;
}
  }

}
