import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchEnseignantService {


  readonly ROOT_URL = 'http://localhost';

  constructor(private http:HttpClient) { }


  addEnseignant (tutor:any) {
    return this.http.post(this.ROOT_URL+'/API/crudTutors/insertTutor.php',tutor);
  } 

  consultEnseignant() {
    return this.http.get(this.ROOT_URL+'/API/crudTutors/affTutor.php');

  }

  consultEnseignantbyName(name:any) {
    return this.http.post(this.ROOT_URL+'/API/crudTutors/affTutorByName.php',name);
  }

  supprimerEnseignant(id:any) {
    return this.http.post(this.ROOT_URL+'/API/crudTutors/delTutor.php',id);
  }

  updateEnseignant(obj:any) {
    return this.http.post(this.ROOT_URL+'/API/crudTutors/updateTutor.php',obj);
  }

}
