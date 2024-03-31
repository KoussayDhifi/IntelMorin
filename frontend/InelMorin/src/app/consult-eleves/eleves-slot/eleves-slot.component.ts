import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-eleves-slot',
  templateUrl: './eleves-slot.component.html',
  styleUrl: './eleves-slot.component.css'
})
export class ElevesSlotComponent {
  public disp:string = "display:none";
  public rotation:string = "";

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
