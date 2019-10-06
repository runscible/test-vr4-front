import { Component, OnInit } from '@angular/core';
import {MainServicService} from '../../main-servic.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  constructor(private service: MainServicService, private formBuilder: FormBuilder) { }
  selectedFile: File;
  ngOnInit() {
  }
  changeAvatar(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  onSubmit() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.service.updateAvatar(uploadData).  then(resp => {
      console.log(`successfull upload `);
    }).catch(err => {
      console.error(err);
    });
  }
}
