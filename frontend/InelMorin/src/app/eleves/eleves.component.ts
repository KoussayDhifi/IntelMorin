import { Component } from '@angular/core';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css' , './eleves.component.css']
  
})
export class ElevesComponent {
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
