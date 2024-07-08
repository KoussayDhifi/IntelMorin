import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountAllService {

  readonly ROOT_URL = 'http://localhost';

  constructor(private http:HttpClient, private router:Router) { }


  getTutors () {
    return this.http.get(this.ROOT_URL+'/API/crudTutors/countTutor.php');
  }

  getStudents() {
    return this.http.get(this.ROOT_URL+'/API/crudStudent/countStudent.php');
  }

  getClassrooms() {
    return this.http.get(this.ROOT_URL+'/API/crudSalle/countSalle.php');
  }


}
