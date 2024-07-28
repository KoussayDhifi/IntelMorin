import { Component, inject } from '@angular/core';
import { FetchMatiereService } from '../matieres/fetch-matiere.service';
import { FetchEnseignantService } from './fetch-enseignant.service';
import { CommonModule } from '@angular/common';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrl: './create-enseignant.component.css',
})
export class CreateEnseignantComponent {
  
  constructor(private builder : FormBuilder){}

  ngOnInit() {
   this.affMat();
   this.LevelData = this.builder.group({
     level_id : this.builder.array([this.builder.control(null)])
   })
  }


  LevelData! : FormGroup;
  public msg = '';
  nom: string = '' ; 
  prenom : string ='' ; 
  DateNP : any ='' ;
  Telephone : any ='' ; 
  Email : any ='' ;
  Password : any ='' ; 
  NomLy : string ='' ; 
  Matiere : string ='' ; 
  level : string ='';
  Matierefetcher = inject(FetchMatiereService);
  Enseignantfetcher = inject(FetchEnseignantService);



  public levels : any[] = [];
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
   addLevel()
   {(this.LevelData.get('level_id') as FormArray).push(this.builder.control(null))}
   deleteLevel(index: any)
   {(this.LevelData.get('level_id') as FormArray).removeAt(index)}
   getLevels() : AbstractControl[]
   {return (<FormArray> this.LevelData.get('level_id')).controls}
   
}
