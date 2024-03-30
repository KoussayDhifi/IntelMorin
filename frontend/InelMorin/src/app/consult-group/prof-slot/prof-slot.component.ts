import { Component } from '@angular/core';


@Component({
  selector: 'app-prof-slot',
  templateUrl: './prof-slot.component.html',
  styleUrl: './prof-slot.component.css'
})
export class ProfSlotComponent {
  public idG : any ; 
  public NomG : any ; 
  public NbrE : any ; 




  public disp:string = "display:none";
  public rotation:string = "";

  public expand:boolean | undefined;

  toggleGrid () {
    if (this.expand == undefined) {
      this.expand = false;
    }
    this.expand = !this.expand;

    
  }
  deleteSlot() {
    //Back-end
  }
}

