import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-prof-card',
  templateUrl: './prof-card.component.html',
  styleUrl: './prof-card.component.css'
})
export class ProfCardComponent {
  @Input() nomProf:any;
  @Input() prenProf:any;
  @Input() idG : any ; 
  @Input() NomG : any ; 
  




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
