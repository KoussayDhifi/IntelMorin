import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchAdminService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'http://localhost';


  addAdmin(obj:any) {
    return this.http.post(this.ROOT_URL+'/API/crudAdmin/insertAdmin.php',obj);
  }

}
