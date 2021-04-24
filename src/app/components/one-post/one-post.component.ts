import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostObject } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  id:string;
  onePost:PostObject;

  constructor(private activeRoute: ActivatedRoute,
    private post:PostService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.cargarPost();
  }

  cargarPost(){
    this.post.getPost(this.id).subscribe( res =>{
      this.onePost = res;
    })
  }

}
