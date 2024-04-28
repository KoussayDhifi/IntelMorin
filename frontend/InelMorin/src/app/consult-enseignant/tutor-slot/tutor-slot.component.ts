import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { FetchEnseignantService } from '../../create-enseignant/fetch-enseignant.service';

@Component({
  selector: 'app-tutor-slot',
  templateUrl: './tutor-slot.component.html',
  styleUrl: './tutor-slot.component.css'
})
export class TutorSlotComponent {
  public disp:string = "display:none";
  public rotation:string = "";

  constructor (private fens:FetchEnseignantService) {}
 
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
      this.display = "d-block w-100";
    }else {
      this.button = "btn btn-primary mr-2";
      this.bValue = "Editer";
      this.display = "d-none";
      let obj = {
       
      }
      console.log(obj);
    }
  }

  supprimerEns (id:any) {
    let idobj = {
      id_prof:id
    }

    this.data.emit(id);
  }




}
