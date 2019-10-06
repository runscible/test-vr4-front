import { Component, OnInit } from '@angular/core';
import {MainServicService} from '../../main-servic.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  music: {};
  constructor(private service: MainServicService) { }

  ngOnInit() {
    this.service.getMusic().then(resp => {
      this.music = resp;
    })
  }

}
