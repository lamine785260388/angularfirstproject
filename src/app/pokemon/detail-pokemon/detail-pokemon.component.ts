import { PokemonService } from './../pokemon.service';
import { Pokemon } from '../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonlist:Pokemon[];
  pokemon:Pokemon|undefined;
  constructor(private route:ActivatedRoute,private router:Router,private pokemonService:PokemonService) {

   }

  ngOnInit() {
    
    const pokemonId:string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon=this.pokemonService.getPokemonById(+pokemonId);

 
    }
    
  }
  goToPokemonList(){
this.router.navigate(['/pokemons']);
  }

}
