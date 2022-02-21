import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/Visitor';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.publishVisitor.subscribe((published: Visitor) => {
      console.log(published);
      
    });
  }

  cinemaBtn() {
    this.service.movieAnnouncement({title: 'Star Wars - Rise of Skywalker', length: 210});
  };
}