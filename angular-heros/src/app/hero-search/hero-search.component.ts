import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit{

  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService
  ){}

  serach(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms
      .pipe(
        // 연속된 키입력을 처리하기 위해서 300ms 대기한다.
        debounceTime(300),

        // 이전에 입력한 검색어와 같으면 무시한다.
        distinctUntilChanged(),

        // 검색어가 변경되면 새로운 옵저버블을 생성한다.
        switchMap((term: string) => this.heroService.searchHeroes(term)),
      );
  }

  search(term: string): void{
    this.searchTerms.next(term);
  }
}

