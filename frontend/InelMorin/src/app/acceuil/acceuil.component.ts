import { Component, inject } from '@angular/core';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  public neleves:number = 0;
  public nens:number = 0;
  public nsalles:number = 0;
  private datetime:any = inject(TimeService);
  public date:string = this.datetime.getDate();
  public time:string = this.datetime.getTime();



  ngOnInit() {
    this.getTime();
  }

  getTime ():any {
    setInterval (()=> {
      this.time = this.datetime.getTime()
    },60000)
  }
  
  

}
