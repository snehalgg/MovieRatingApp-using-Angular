import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comment.model';
import { CommentService } from '../comment.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  movie: Movie | undefined;
  comments: Comment[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const movieIdParam = this.route.snapshot.paramMap.get('id');
    const movieId = movieIdParam ? +movieIdParam : 0; // Use a default value if it's null
    this.movie = this.movieService.getMovieById(movieId);
    this.comments = this.commentService.getCommentsByMovieId(movieId);
  }
  

  addComment() {
    if (this.newComment.trim() !== '') {
      const comment: Comment = {
        id: this.comments.length + 1,
        movieId: this.movie!.id,
        text: this.newComment.trim()
      };
      this.commentService.addComment(comment);
      this.comments.push(comment);
      this.newComment = '';
    }
  }
}
