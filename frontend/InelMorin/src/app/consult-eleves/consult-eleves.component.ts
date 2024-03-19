import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-eleves',
  templateUrl: './consult-eleves.component.html',
  styleUrl: './consult-eleves.component.css'
})
export class ConsultElevesComponent {
  public Nom :string=""; 
  public Prenom :string="";
  public Num : number=0 ; 
}
