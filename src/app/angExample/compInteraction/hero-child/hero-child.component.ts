import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent implements OnInit {

  // @Input() hero: Hero;
  private herotmp: Hero;
  @Input('master') masterName: string;
  // private _masterName = '';

  @Input()
  set hero(hero: Hero) {
    this.herotmp = {
      name: (hero.name && hero.name.trim()) || '<no name set>'
    };
  }

  get hero(): Hero { return this.herotmp; }

  constructor() { }

  ngOnInit(): void {
  }

}
