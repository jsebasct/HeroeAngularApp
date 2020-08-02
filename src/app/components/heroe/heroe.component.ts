import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {}

  constructor(private activatedRoute: ActivatedRoute
              , private heroesService: HeroesService) 
  {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = heroesService.getHeroe(params['id'])
      console.log('heroe', this.heroe)
    })
  }

  getImagenCasa(): string {
    let res = "assets/img/marvel-logo.png"
    if (this.heroe.casa === "DC") {
      res = "assets/img/dc-logo.jpg"
    }
    return res
  }

}
