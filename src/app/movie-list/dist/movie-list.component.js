"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieListComponent = void 0;
var core_1 = require("@angular/core");
var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(router) {
        this.router = router;
        this.movies = [
            {
                id: 1,
                title: 'Movie 1',
                image: 'https://th.bing.com/th/id/OIP.VH2jLhMKTCRgBLfUIQPx-QHaKy?w=184&h=268&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            {
                id: 2,
                title: 'Movie 2',
                image: 'https://th.bing.com/th/id/OIP.4h1iFvz6CRGqN5aa4sGqOwHaIT?w=146&h=180&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            {
                id: 3,
                title: 'Movie 3',
                image: 'https://th.bing.com/th/id/OIP.ZDj7zMEkUBhIe8LzdSmqlQHaFj?w=213&h=180&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            {
                id: 4,
                title: 'Movie 4',
                image: 'https://th.bing.com/th/id/OIP.j4lp-wE1teLZ8BlOBJ0f1wHaKl?w=184&h=262&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            {
                id: 5,
                title: 'Movie 5',
                image: 'https://th.bing.com/th/id/OIP.0NK6g_1CfFsmq-_iZGpcSwHaKe?w=116&h=180&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            {
                id: 6,
                title: 'Movie 6',
                image: 'https://th.bing.com/th/id/OIP.6EIpVIdYNBHkcMM-54osgAHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            {
                id: 7,
                title: 'Movie 7',
                image: 'https://th.bing.com/th/id/OIP.lq4QpGi8I48P6b8nz_RfogHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
            { id: 8,
                title: 'Movie 8',
                image: 'https://th.bing.com/th/id/OIP.vsqlPp6omHlGqxHPCpRBbAHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7.jpg',
                rating: 0, totalRatings: 0
            },
        ];
        this.selectedRating = 0;
    }
    MovieListComponent.prototype.rateMovie = function (movie, rating) {
        movie.rating = ((movie.rating * movie.totalRatings) + rating) / (movie.totalRatings + 1);
        movie.totalRatings++;
        this.selectedRating = rating;
    };
    MovieListComponent.prototype.getRange = function () {
        return Array(5).fill(0).map(function (_, index) { return index + 1; });
    };
    MovieListComponent.prototype.goToComments = function (id) {
        this.router.navigate(['/comments', id]);
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-list',
            templateUrl: './movie-list.component.html',
            styleUrls: ['./movie-list.component.css']
        })
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
