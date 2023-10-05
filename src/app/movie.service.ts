import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    // Your movie data here...
    {
      id:1,
      title: 'Movie 1',
      image: 'https://th.bing.com/th/id/OIP.VH2jLhMKTCRgBLfUIQPx-QHaKy?w=184&h=268&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {
      id:2,
      title: 'Movie 2',
      image: 'https://th.bing.com/th/id/OIP.4h1iFvz6CRGqN5aa4sGqOwHaIT?w=146&h=180&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {
      id:3,
      title: 'Movie 3',
      image: 'https://th.bing.com/th/id/OIP.ZDj7zMEkUBhIe8LzdSmqlQHaFj?w=213&h=180&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {
      id:4,
      title: 'Movie 4',
      image: 'https://th.bing.com/th/id/OIP.j4lp-wE1teLZ8BlOBJ0f1wHaKl?w=184&h=262&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {
      id:5,
      title: 'Movie 5',
      image: 'https://th.bing.com/th/id/OIP.0NK6g_1CfFsmq-_iZGpcSwHaKe?w=116&h=180&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {
      id:6,
      title: 'Movie 6',
      image: 'https://th.bing.com/th/id/OIP.6EIpVIdYNBHkcMM-54osgAHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {
      id:7,
      title: 'Movie 7',
      image: 'https://th.bing.com/th/id/OIP.lq4QpGi8I48P6b8nz_RfogHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
    {  id:8,
      title: 'Movie 8',
      image: 'https://th.bing.com/th/id/OIP.vsqlPp6omHlGqxHPCpRBbAHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7.jpg',
      rating: 0, totalRatings: 0 
    },
  ];

  getMovieById(id: number): Movie {
    return this.movies.find(movie => movie.id === id)!; // Add null check or handle if not found
  }
}
