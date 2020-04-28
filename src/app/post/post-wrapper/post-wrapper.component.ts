import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {

  // postAdded: Post[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  /*
  onPostAdded(post: any) {
    this.postAdded.push(post);
  }*/

}
