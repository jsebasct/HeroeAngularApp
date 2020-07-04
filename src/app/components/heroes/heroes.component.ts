import { Component, OnInit } from '@angular/core';
// import { HeroesService } from '../../services/heroes.service;
import { HeroesService, Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('init')
    this.heroes = this._heroesService.getHeroes()
    console.log(this.heroes)
  }

  

}
