import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-payment',
  templateUrl: './tutor-payment.component.html',
  styleUrl: './tutor-payment.component.css'
})
export class TutorPaymentComponent {
  public profName:any = "";
  public dateP:any = "";
  public expand:boolean | undefined;
  
  isDateFormatValid(date: string): boolean {
    const dateFormatRegex = /(0[1-9]|1[012])\/[0-9]{4}/;
    console.log(dateFormatRegex.test(date))
    return dateFormatRegex.test(date);
  }
  

  toggleGrid () {
    if (this.expand == undefined) {
      this.expand = false;
    }
    this.expand = !this.expand;

    
  }

  submitTest() {
    console.log("Submitted yo");
  }
}
