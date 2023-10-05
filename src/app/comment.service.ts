import { Injectable } from '@angular/core';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];

  getCommentsByMovieId(movieId: number): Comment[] {
    return this.comments.filter(comment => comment.movieId === movieId);
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
