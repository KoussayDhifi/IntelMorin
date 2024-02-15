import { Component } from '@angular/core';

@Component({
  selector: 'app-create-emploi',
  templateUrl: './create-emploi.component.html',
  styleUrls: ['./create-emploi.component.css']
})
export class CreateEmploiComponent {
  public idGroupe:string = "";
  public date:string = "";
  public Hdebut:string = "";
  public Hfin:string = "";
  public salle:string = ""
  public repeter:boolean = false;


  ajouterEmploi () {

  }


}
