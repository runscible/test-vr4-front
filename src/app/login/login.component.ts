import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MainServicService} from '../main-servic.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private myform : FormBuilder,
              private service: MainServicService,
              private router: Router) { }
  form = this.myform.group({
     type: '',
     username: '',
     password: ''
  });
  error = false;
  ngOnInit() {
  }
  login(): void{
    // @ts-ignore
    this.service.login(this.form.username, this.form.password).then(resp => {
      // @ts-ignore
      if (resp.message !== null) {
        this.router.navigate(['/main']);
      } else {
        this.error = true;
      }
    })
  }
}
