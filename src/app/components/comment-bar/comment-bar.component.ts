import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentClassObject } from 'src/app/models/comment.class';
import { CommentService } from 'src/app/service/comment.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-comment-bar',
  templateUrl: './comment-bar.component.html',
  styleUrls: ['./comment-bar.component.css']
})
export class CommentBarComponent implements OnInit {
  @Input() idPost:number;
  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private storage:StorageService,
    private  comment:CommentService,
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      comentario:['',[Validators.required]],
    });
  }

  comentar(){
    if(this.form.valid){
      let comment = this.form.get('comentario').value;
      let userID = this.storage.obtenerUsuario().ID;
      const newComment = new CommentClassObject(comment,this.idPost, userID);

      this.comment.postComment(newComment).subscribe( res=>{
        this.form.reset();
        console.log(res);
      })
    }

  }

}
