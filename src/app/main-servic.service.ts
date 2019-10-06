import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServicService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get('http://localhost:8080/films').toPromise();
  }
  getMusic() {
    return this.http.get('http://localhost:8080/music').toPromise();
  }
  getAbout() {
    return this.http.get('http://localhost:8080/about').toPromise();
  }
  login(user: string, password: string) {
    return this.http.post('http://localhost:8080/login',  { user: user, password: password}).toPromise();
  }
  updateInfo(data: string) {
    return this.http.post('http://localhost:8080/update-info', {info: data}).toPromise();
  }
  updateAvatar(data: any) {
     return this.http.post('http://localhost:8080/post-avatar',  data).toPromise();
  }
}
