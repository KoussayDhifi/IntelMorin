import { Time } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-schedule-slot',
  templateUrl: './schedule-slot.component.html',
  styleUrl: './schedule-slot.component.css'
})
export class ScheduleSlotComponent {
  @Input() profName:string = "";
  @Input() profLast:string = "";
  @Input() matiere:string = "";
  @Input() groupe:string = "";
  
  //To do in the backend
  @Input() idGroupe:number | undefined;
  @Input() sHour:Time | undefined;
  @Input() eHour:Time | undefined;
  @Input() idClassRoom:number | undefined;
  @Input() date:Date | undefined;




  editSlot($event:any) {
    //To do in the backend
    
  }

  deleteSlot ($event:any) {
    //To do in the backend
  }

}
