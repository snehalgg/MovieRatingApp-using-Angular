"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentComponent = void 0;
var core_1 = require("@angular/core");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(route, movieService, commentService) {
        this.route = route;
        this.movieService = movieService;
        this.commentService = commentService;
        this.comments = [];
        this.newComment = '';
    }
    CommentComponent.prototype.ngOnInit = function () {
        var movieIdParam = this.route.snapshot.paramMap.get('id');
        var movieId = movieIdParam ? +movieIdParam : 0; // Use a default value if it's null
        this.movie = this.movieService.getMovieById(movieId);
        this.comments = this.commentService.getCommentsByMovieId(movieId);
    };
    CommentComponent.prototype.addComment = function () {
        if (this.newComment.trim() !== '') {
            var comment = {
                id: this.comments.length + 1,
                movieId: this.movie.id,
                text: this.newComment.trim()
            };
            this.commentService.addComment(comment);
            this.comments.push(comment);
            this.newComment = '';
        }
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'app-comment',
            templateUrl: './comment.component.html',
            styleUrls: ['./comment.component.css']
        })
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
