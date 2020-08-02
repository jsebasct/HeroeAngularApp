import { Component, OnInit } from '@angular/core';
// import { HeroesService } from '../../../services/heroes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //private heroesService: HeroesService
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    console.log(termino)
    // this.heroesService.buscarHeroes(termino)
    this.router.navigate(['/filtrado', termino])
  }

}
