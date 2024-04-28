import { Component, inject } from '@angular/core';
import { FetchMatiereService } from '../matieres/fetch-matiere.service';
import { FetchEnseignantService } from './fetch-enseignant.service';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrl: './create-enseignant.component.css'
})
export class CreateEnseignantComponent {
  public msg = '';
  nom: string = '' ; 
  prenom : string ='' ; 
  DateNP : any ='' ;
  Telephone : any ='' ; 
  Email : any ='' ;
  Password : any ='' ; 
  NomLy : string ='' ; 
  Matiere : string ='' ; 
  Matierefetcher = inject(FetchMatiereService);
  Enseignantfetcher = inject(FetchEnseignantService);




  public matieres:any[] = [];

  affMat() {
    this.Matierefetcher.getMatiere().subscribe(
      (data: any[]) => {
        console.log(data)
        this.matieres = data; 
      },
      (error) => {
        console.error('Error fetching matieres:', error);
      }
    );
    
   }

   insertProf () {
    let obj = {
      nom:this.nom,
      prenom:this.prenom,
      telp:this.Telephone,
      lycee:this.NomLy,
      mat:this.Matiere
    }
    console.log(obj)

    this.Enseignantfetcher.addEnseignant(obj).subscribe (
      (data: any) => {
        
        this.msg = data.msg; 
      },
      (error) => {
        console.error('Error fetching matieres:', error);
      }

    )

   }

   


   ngOnInit() {
    this.affMat();
   }
  


}
