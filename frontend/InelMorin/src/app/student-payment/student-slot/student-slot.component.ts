import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-student-slot',
  templateUrl: './student-slot.component.html',
  styleUrl: './student-slot.component.css'
})
export class StudentSlotComponent {
  @Input() studentId:number | undefined;
  @Input() studentName:string | undefined;
  @Input() studentLastName:string | undefined;


  public disp:string = "display:none";
  public rotation:string = "";

  public expand:boolean | undefined;

  toggleGrid () {
    if (this.expand == undefined) {
      this.expand = false;
    }
    this.expand = !this.expand;

    
  }
  
}
