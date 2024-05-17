import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {

  readonly ROOT_URL = 'http://localhost';

  constructor(private http:HttpClient) { }

  insertStudent(obj:any) {
    return this.http.post(this.ROOT_URL+'/API/crudStudent/insertStudent.php',obj);
  }

}
