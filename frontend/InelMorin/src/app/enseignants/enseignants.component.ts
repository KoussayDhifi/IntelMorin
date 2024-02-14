import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl:'./enseignants.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css' , './enseignants.component.css']
})
export class EnseignantsComponent {
  nom: string = '' ; 
  prenom : string ='' ; 
  DateNP : any ='' ;
  Telephone : any ='' ; 
  Email : any ='' ;
  Password : any ='' ; 
  NomLy : string ='' ; 
  Matiere : string ='' ; 

}
