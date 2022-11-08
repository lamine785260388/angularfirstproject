
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';
import { Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule } from '@angular/router';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const pokemonsRoutes: Routes = [
  {path:'edit/pokemon/:id',component:EditPokemonComponent },
  {path:'pokemons',component:ListPokemonComponent},
  {path:'pokemons/:id',component:DetailPokemonComponent},
 
];



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonsRoutes)
  ],
  providers:[PokemonService],//on ajoute cette ligne
})
export class PokemonModule { }
