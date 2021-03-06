import { compileNgModuleFromRender2 } from "@angular/compiler/src/render3/r3_module_compiler";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { HeroeComponent } from './components/heroe/heroe.component';
import { FiltradosComponent } from './components/filtrados/filtrados.component';


const APP_ROUTES: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'about' , component: AboutComponent},
    {path: 'heroes' , component: HeroesComponent},
    {path: 'heroe/:id' , component: HeroeComponent},
    {path: 'filtrado/:name' , component: FiltradosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// , {useHash:true}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true})