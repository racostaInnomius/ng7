import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style = false;
  users: any;
  filterUser = '';
  home = 'HomeX';
  birthday = new Date(1988, 3, 15);

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  firstClick() {
     console.log('clicked');
     this.h1Style = true;
     this.data.firstClick();
  }
}
