import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { FetchEnseignantService } from '../../create-enseignant/fetch-enseignant.service';
import { FetchMatiereService } from '../../matieres/fetch-matiere.service';

@Component({
  selector: 'app-tutor-slot',
  templateUrl: './tutor-slot.component.html',
  styleUrl: './tutor-slot.component.css'
})
export class TutorSlotComponent {
  public disp:string = "display:none";
  public rotation:string = "";
  public matiere:any[] = [];

  constructor (private fens:FetchEnseignantService, private fmatiere:FetchMatiereService) {}
 
  @Input() idProf:any;
  @Input() nom:any;
  @Input() prenom:any;
  @Input() tel:any;
  @Input() lycee:any;
  @Input() mat:any;
  @Input() idmat:any;
  @Input() callbackAff = () => {
    return 0;
  }

  public expand:boolean | undefined;

  @Output() data = new EventEmitter();
  @Output() prof = new EventEmitter();



  public button:string = "btn btn-primary mr-2";
  public bValue:string = "Editer"
  public display:string = "d-none";

  toggleGrid () {
    if (this.expand == undefined) {
      this.expand = false;
    }
    this.expand = !this.expand;

    
  }
  editSlot() {
    if (this.button == "btn btn-primary mr-2") {
      this.button = "btn btn-success mr-2";
      this.bValue = "Sauvegarder";
    }else {
      this.button = "btn btn-primary mr-2";
      this.bValue = "Editer";
      
      let obj = {
       ID_TUTOR:this.idProf,
       F_NAMET:this.nom,
       L_NAMET:this.prenom,
       TEL:this.tel,
       SCHOOL:this.lycee,
       SUBJ:this.idmat
      }
      console.log(obj);
      this.prof.emit(obj);
    }
  }

  supprimerEns (id:any) {
    let idobj = {
      id_prof:id
    }

    this.data.emit(id);
  }


  selectMatiere () {
    this.fmatiere.getMatiere().subscribe (
      (data:any) => {
        this.matiere = data;
      }, (err:any) => {
        console.error(err);
      }
    )
  }

  

  ngOnInit () {
    this.selectMatiere();
  }



}
