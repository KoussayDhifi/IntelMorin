import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-eleves',
  templateUrl: './consult-eleves.component.html',
  styleUrls:['../../../node_modules/bootstrap/dist/css/bootstrap.min.css' ,'./consult-eleves.component.css']
})
export class ConsultElevesComponent {

  levelArray : any[] =[];
  public Nomprenom :string="";
}
