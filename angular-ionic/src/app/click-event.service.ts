import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClickEventService {

  constructor(
    private router: Router
  ) { }

  onTabClick(url: string){
    this.router.navigate([url])
  }
}
