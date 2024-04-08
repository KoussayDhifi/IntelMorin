import { Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./matieres.component.css']
})
export class MatieresComponent implements OnInit{
   matiere :string="";
   matiereArray :any[]= [];


   ajout()
   {
    this.matiereArray.push(this.matiere);


    console.log(this.matiereArray);
   }
   suprrimeMatiere(){}
constructor(){}
ngOnInit(): void {

}
}
