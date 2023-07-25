import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
import { HEROS } from '../mock-heros';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];

  // selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
  ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add( `HerosComponent : Selected hero id=${hero.id}` );
  // }

  // getHeros(): void{
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void{
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}