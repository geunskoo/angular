import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const heroes = [
      { id: 1, name: '아이언맨' },
      { id: 2, name: '스파이더맨' },
      { id: 3, name: '슈퍼맨' },
      { id: 4, name: '닥터스트레인지' },
      { id: 5, name: '헐크' },
      { id: 6, name: '블랙위도우' },
      { id: 7, name: '블랙팬서' },
      { id: 8, name: '호크아이' },
    ];
  return {heroes};
  }

  //히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  //히어로 목록 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  //히어로 목록이 비어있지 않으면 히어로 id의 최대값에 1을 더해서 반환합니다.
  getId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
