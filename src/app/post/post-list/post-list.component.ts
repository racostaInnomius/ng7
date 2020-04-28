import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private subs: Subscription;
  constructor(public postService: PostsService) { }
/*  posts = [
    { title: 'one title', content: 'This is the first content text' },
    { title: 'two title', content: 'This is the second content text' },
    { title: 'tree title', content: 'This is the third content text' }
 ];*/
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.subs = this.postService.getPostUpdate().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
