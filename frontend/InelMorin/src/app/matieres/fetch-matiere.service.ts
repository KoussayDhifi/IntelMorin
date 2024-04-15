import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from './Matiere';
import { msg } from '../msg';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchMatiereService {


  readonly ROOT_URL = 'http://localhost'

  constructor(private http:HttpClient) { }

  addMatiere(matiere:Matiere):Observable<any> {
    

    return this.http.post(this.ROOT_URL+'/API/crudMatiere/insertMat.php',matiere);

  }

  getMatiere():Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.ROOT_URL+'/API/crudMatiere/affMat.php');
  }

  delMatiere(matiere:any) {
    return this.http.post(this.ROOT_URL+'/API/crudMatiere/delMat.php',matiere);
  }

}
