import { Component } from '@angular/core';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrl: './create-enseignant.component.css'
})
export class CreateEnseignantComponent {
  nom: string = '' ; 
  prenom : string ='' ; 
  DateNP : any ='' ;
  Telephone : any ='' ; 
  Email : any ='' ;
  Password : any ='' ; 
  NomLy : string ='' ; 
  Matiere : string ='' ; 

}
