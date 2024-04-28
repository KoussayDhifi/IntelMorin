import { Component, OnInit  } from '@angular/core';
import { FetchEnseignantService } from '../create-enseignant/fetch-enseignant.service';


@Component({
  selector: 'app-consult-enseignant',
  templateUrl: './consult-enseignant.component.html',
  styleUrl: './consult-enseignant.component.css'
})
export class ConsultEnseignantComponent implements OnInit{

  public nomprenom = "";
  public idProf:any | undefined;
  
  public tutors:any[] = [];
  
  constructor (private fens:FetchEnseignantService) {

  }


  ngOnInit():void {
    this.affTutor()
    console.log(this.tutors);
  }

  affTutor ():any {
    this.fens.consultEnseignant().subscribe (
      (data:any) => {
        try {
          this.tutors.length = 0;
        for (let i = 0; i<data[0].length; i++) {
          this.tutors.push(data[0][i]);
        }}catch (e) {
          this.tutors.length = 0;
        }
      },
      (err:any) => {
        console.error(err);
      }
    )
  }

  affByName () {
    let n = this.nomprenom.split(' ');
    if (n.length>1) {
    var obj = {
      nom:n[0],
      prenom:n[1]
    }
    }else {
      var obj = {
        nom:this.nomprenom,
        prenom:this.nomprenom
      }
    }
    this.fens.consultEnseignantbyName(obj).subscribe(
      (data:any) => {
        this.tutors.length = 0;
        for (let i = 0; i<data[0].length; i++) {
          this.tutors.push(data[0][i]);
        }
      },
      (err:any) => {
        console.error(err);
      }
    )
  }

  getData ($event:any) {
    this.idProf = $event;
    this.supprimerEns(this.idProf);
  }

  supprimerEns (id:any) {
    let idobj = {
      id_prof:id
    }

    this.fens.supprimerEnseignant(idobj).subscribe (
      (data:any) => {
        console.log(data);
        this.affTutor();
      },
      (err:any) => {
        console.error(err);
      }
    )
  }


}
