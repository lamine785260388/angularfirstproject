import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>hello word {{ pokemonlist[0]}}!</h1>'
   

  
})
export class AppComponent implements OnInit{
  pokemonlist= ['bulbizarre','salameche','carapuce'];
  ngOnInit(): void {
    console.table(this.pokemonlist);
    throw new Error('Method not implemented.');
  }//nous permet d'exporter notre component pour le rendre disponible

selectPokemon(pokemonName:string){
  console.log("vous avez cliqué sur le pokémon "+pokemonName);
};

}


