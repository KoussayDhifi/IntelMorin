import { Component } from '@angular/core';
import { ScheduleService } from './fetch-schedule.service';

@Component({
  selector: 'app-create-emploi',
  templateUrl: './create-emploi.component.html',
  styleUrls: ['./create-emploi.component.css']
})
export class CreateEmploiComponent {
  idGroupe: string = '';
  date: string = '';
  Hdebut: string = '';
  Hfin: string = '';
  salle: string = '';
  repeter: boolean = false;

  constructor(private scheduleService: ScheduleService) { }

  ajouterEmploi() {
    const schedule = {
      group_name: this.idGroupe,
      start_time: this.Hdebut,
      end_time: this.Hfin,
      date: this.date,
      room: this.salle
    };

    this.scheduleService.addSchedule(schedule).subscribe(response => {
      console.log(response);
      alert(response.message || response.error);
    });
  }
}
