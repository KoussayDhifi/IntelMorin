import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-tutor-slot',
  templateUrl: './tutor-slot.component.html',
  styleUrl: './tutor-slot.component.css'
})
export class TutorSlotComponent {
  public disp:string = "display:none";
  public rotation:string = "";
 
  @Input() nom:any;
  @Input() prenom:any;
  @Input() tel:any;
  @Input() lycee:any;
  @Input() mat:any;

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




}
