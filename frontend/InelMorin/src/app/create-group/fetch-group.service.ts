import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchGroupService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'http://localhost'

  insertGroup (group:any) {
    return this.http.post(this.ROOT_URL+'/API/crudGroupes/insertGroup.php',group);
  }



}
