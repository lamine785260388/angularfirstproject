import { Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['./pokemon-form.component.css']
 
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon:Pokemon;

types:string[];
constructor(private pokemonService:PokemonService,private router:Router){

}
  ngOnInit() {
    //liste pokemontype list
    this.types=this.pokemonService.getPokemonTypeList();
  }
  hasType(type:string):boolean{

if(this.pokemon.types.includes(type)){
  return true;
}
  return this.pokemon.types.includes(type);

  }
  selectType($event: Event , type:string){
    const ischecked:boolean=($event.target as HTMLInputElement).checked; //verifier si une case est coché 
if(ischecked){
  this.pokemon.types.push(type);
console.log(this.pokemon.types);
}
else{
  const index=this.pokemon.types.indexOf(type);
  
  this.pokemon.types.splice(index,1);//retrait d'un element d'un tableau
}
  }
  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length==1 && this.hasType(type)){
       return false;
    }
    if(this.pokemon.types.length>2 && !this.hasType(type)){
      return false;
    }
    return true;
  }
  onSubmit(){
console.log('submit form');
  this.router.navigate(['/pokemons',this.pokemon.id])
  }
}
