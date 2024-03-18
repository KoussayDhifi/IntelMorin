import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-slot',
  templateUrl: './schedule-slot.component.html',
  styleUrl: './schedule-slot.component.css'
})
export class ScheduleSlotComponent {
  @Input() profName:string | undefined;
  @Input() profLast:string | undefined;
  @Input() matiere:string | undefined;
  @Input() groupe:string | undefined;
  
  //To do in the backend
  @Input() idGroupe:number | undefined;
  @Input() sHour:Time | undefined;
  @Input() eHour:Time | undefined;
  @Input() idClassRoom:number | undefined;
  @Input() date:Date | undefined;

  @Output() data = new EventEmitter();

  public button:string = "btn btn-primary mr-2";
  public bValue:string = "Editer"
  public display:string = "d-none"; 

  public newDate:string = "";
  public newHeureDebut = "";
  public newHeureFin = "";
  public newGroupe = "";


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
        newDate:this.newDate,
        newHeureDebut:this.newHeureDebut,
        newHeureFin:this.newHeureFin,
        newGroupe:this.newGroupe
      }
      console.log(obj);
    }
  }

  deleteSlot () {
    //To do in the backend
  }

}
