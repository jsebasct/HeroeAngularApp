import { Component, OnInit } from '@angular/core';
// import { HeroesService } from '../../services/heroes.service;
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService,
              private router: Router
    ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('init')
    this.heroes = this._heroesService.getHeroes()
    console.log(this.heroes)
  }

  verHeroe(indice: number): void {
    console.log(indice)
    this.router.navigate(['/heroe', indice])
  }
  

}
