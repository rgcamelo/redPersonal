import { Component, OnInit, Input } from '@angular/core';
import { RedirectService } from 'src/app/service/redirect.service';
import { StorageService } from 'src/app/service/storage.service';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment:Comment;
  @Input() postID;
  userID;

  constructor(private redirect:RedirectService) { }

  ngOnInit(): void {

  }

  irPerfil(){
    this.redirect.redirectTo(`/board/profile/${this.comment.user_id}`);
  }





}
