import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private date:Date = new Date();
  private day = this.date.getDate().toString().padStart(2, '0');
  private month = (this.date.getMonth() + 1).toString().padStart(2, '0');
  private year = this.date.getFullYear();
  private hours = this.date.getHours().toString().padStart(2, '0');
  private minutes = this.date.getMinutes().toString().padStart(2, '0');




  getDate ():string {
    return `${this.day}/${this.month}/${this.year}`
  }

  getTime():string {
    return `${this.hours}:${this.minutes}`
  }


  constructor() { 
    setInterval (() => {
      this.date = new Date();
      this.day = this.date.getDate().toString().padStart(2, '0');
      this.month = (this.date.getMonth() + 1).toString().padStart(2, '0');
      this.year = this.date.getFullYear();
      this.hours = this.date.getHours().toString().padStart(2, '0');
      this.minutes = this.date.getMinutes().toString().padStart(2, '0');
    },60000)

  }
}
