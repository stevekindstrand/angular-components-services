import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/Movie';
import { Visitor } from '../models/Visitor';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieSource = new Subject<Movie>();
  private visitorSource = new Subject<Visitor>();

  publishedMovie = this.movieSource.asObservable();
  publishVisitor = this.visitorSource.asObservable();

  constructor() { }

  movieAnnouncement(newMovie: Movie) {
    this.movieSource.next(newMovie)
  }

  visitorAnnouncement(newVisitor: Visitor) {
    this.visitorSource.next(newVisitor)
  }
}
