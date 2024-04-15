import { Component,OnInit, inject} from '@angular/core';
import { FetchMatiereService } from './fetch-matiere.service';
import { Matiere } from './Matiere';


@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./matieres.component.css']
})
export class MatieresComponent implements OnInit{
   matiere :string="";
   public show = false;
   public msg:any = "";
   matiereArray : any[] | undefined;
   private Matierefetcher = inject(FetchMatiereService);


   ajout() {
    let obj:Matiere = {
      matiere:this.matiere
    }
    this.show = true;

    this.Matierefetcher.addMatiere(obj).subscribe (
    (msg) => {
      this.msg = msg;
      console.log(msg)
      this.affMat();
    },
    (err) => {
      console.error(err);
    }
    );
    this.show = false;
    
   }
   
   suprrimeMatiere(x:any){
    let obj:any = {
      matiere:x
    }

    this.show = true;

    this.Matierefetcher.delMatiere(obj).subscribe(
      (msg) => {
        this.msg = msg;
        console.log(msg)
        this.affMat();
      },
      (err) => {
        console.error(err);
      }
    );

    this.show = false;

   }

   affMat() {
    this.Matierefetcher.getMatiere().subscribe(
      (data: any[]) => {
        console.log(data)
        this.matiereArray = data; 
      },
      (error) => {
        console.error('Error fetching matieres:', error);
      }
    );
    
   }

constructor(){}
ngOnInit(): void {

  this.affMat();

}
}
