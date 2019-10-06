import { Component, OnInit } from '@angular/core';
import {MainServicService} from '../../main-servic.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: {};
  loading = true;
  constructor(private service : MainServicService) { }

  ngOnInit() {
    this.service.getFilms().then(resp => {
      this.films = resp;
      this.loading = false;
    });
  }

}
