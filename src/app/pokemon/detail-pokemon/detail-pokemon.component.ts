import { Pokemon } from '../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonlist:Pokemon[];
  pokemon:Pokemon|undefined;
  constructor(private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit() {
    this.pokemonlist=POKEMONS;
    const pokemonId:string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon=this.pokemonlist.find(pokemon=>pokemon.id==+pokemonId);

 
    }
    
  }
  goToPokemonList(){
this.router.navigate(['/pokemons']);
  }

}
