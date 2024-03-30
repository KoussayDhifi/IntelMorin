import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-grid-payment',
  templateUrl: './grid-payment.component.html',
  styleUrl: './grid-payment.component.css'
})
export class GridPaymentComponent {

  
  @Input() monthArr = [
    {
      month:"JAN",
      paid:false
    },
    {
      month:"FEB",
      paid:false
    },
    {
      month:"MAR",
      paid:false
    },
    {
      month:"AVR",
      paid:false
    },
    {
      month:"MAI",
      paid:false
    },
    {
      month:"JUIN",
      paid:false
    },
    {
      month:"JUIL",
      paid:false
    },
    {
      month:"OUT",
      paid:false
    },
    {
      month:"SEP",
      paid:false
    },
    {
      month:"OCT",
      paid:false
    },
    {
      month:"NOV",
      paid:false
    },
    {
      month:"DEC",
      paid:false
    },

  ];

  public color:string = "background-color:green";


  toggleMonth (item:any) {
    this.monthArr[this.monthArr.indexOf(item)] = {month:item.month, paid:!item.paid};
  }


}
