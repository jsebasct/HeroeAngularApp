import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-filtrados',
  //templateUrl: './filtrados.component.html',
  templateUrl: '../heroes/heroes.component.html',
  styleUrls: ['./filtrados.component.css']
})
export class FiltradosComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private activatedRoute: ActivatedRoute
              , private heroesService: HeroesService) {   

    this.activatedRoute.params.subscribe( params => {
      console.log('nombre en filtrados: ', params['name'])
      this.heroes = heroesService.buscarHeroes(params['name'])
      // console.log('heroe', this.heroe)
    })
  }

  ngOnInit(): void {
  }

  verHeroe(indice: number): void {
    console.log(indice)
    // this.router.navigate(['/heroe', indice])
  }

}
