import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService
  ) { }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  // lifecircle methods.
  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    //this.router.navigate(['/detail', this.selectedHero.id]);
  }

}














