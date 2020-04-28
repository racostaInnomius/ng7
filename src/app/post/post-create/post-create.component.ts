import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  addPostForm: FormGroup;
  submitted = false;
  success = false;
  // @Output() postAddedEmitter = new EventEmitter<Post>();
  postAddedEmitter = new EventEmitter<Post>();

  constructor(private formBuilder: FormBuilder,
              public postService: PostsService) {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onAddPost() {
    const post: Post = {
                  title: this.addPostForm.controls.title.value,
                  content: this.addPostForm.controls.message.value
                };
    console.log('post: ' + post.title);
    this.submitted = true;
    if (this.addPostForm.invalid) {
      return;
    }
    this.success = true;
    // this.postAddedEmitter.emit(post);
    this.postService.addPosts(this.addPostForm.controls.title.value,
                              this.addPostForm.controls.message.value);
  }

}
