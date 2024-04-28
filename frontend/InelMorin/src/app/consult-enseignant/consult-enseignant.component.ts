import { Component, OnInit } from '@angular/core';
import { FetchEnseignantService } from '../create-enseignant/fetch-enseignant.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-consult-enseignant',
  templateUrl: './consult-enseignant.component.html',
  styleUrl: './consult-enseignant.component.css'
})
export class ConsultEnseignantComponent implements OnInit{

  public tutors:any[] = [];
  
  constructor (private fens:FetchEnseignantService, private cdr: ChangeDetectorRef) {

  }


  ngOnInit():void {
    this.affTutor()
    console.log(this.tutors);
  }

  affTutor ():any {
    this.fens.consultEnseignant().subscribe (
      (data:any) => {
        this.tutors = data;
        this.cdr.detectChanges();
      },
      (err:any) => {
        console.error(err);
      }
    )
  }



}
