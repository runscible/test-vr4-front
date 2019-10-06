import { Component, OnInit } from '@angular/core';
import {MainServicService} from '../../main-servic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  editing = false;
  constructor(private service: MainServicService) { }
  aboutInfo: any;
  ngOnInit() {
    this.service.getAbout().then(resp => {
      // @ts-ignore
      this.aboutInfo = resp.message[0].info;
    });
  }
  edit(): void{
    this.editing = true;
  }
  save():void {
    this.editing = false;
    this.service.updateInfo(this.aboutInfo).then(resp => {
      // @ts-ignore
      // todo: definir el modelo de la respuesta
      this.aboutInfo = resp.message[0].info;
    });
  }
}
