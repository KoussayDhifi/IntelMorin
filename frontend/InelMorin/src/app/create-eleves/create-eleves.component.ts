import { Component } from '@angular/core';

@Component({
  selector: 'app-create-eleves',
  templateUrl: './create-eleves.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./create-eleves.component.css']
})
export class CreateElevesComponent {
  nom: string = '' ; 
  prenom : string ='' ; 
  DateNE : any ='' ;
  TelephoneE : any ='' ;
  TelephoneP : any ='' ; 
  MailE : any ='' ;
  Password : any ='' ; 
  NomLy : string ='' ; 
  Section : string ='' ; 
  Niveau : string ='' ;
}
