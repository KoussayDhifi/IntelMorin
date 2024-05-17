import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchSalleService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'http://localhost'

  insertSalle(obj:any) {
    let obj2 = {
      salle:obj
    }
    return this.http.post(this.ROOT_URL+'/API/crudSalle/insertSalle.php',obj2);
  }

  affSalle() {
    return this.http.get(this.ROOT_URL+'/API/crudSalle/affSalle.php');
  }

  delSalle(obj:any) {
    let obj2 = {
      salle:obj
    }
    return this.http.post(this.ROOT_URL+'/API/crudSalle/delSalle.php',obj2);
  }



}
