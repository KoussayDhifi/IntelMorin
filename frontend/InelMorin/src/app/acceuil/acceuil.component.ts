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
  public img:string = "../../assets/farhat.jpg";
  public t:number = 1;



  ngOnInit() {
    this.getTime();
    this.getImg();
  }

  getTime ():any {
    setInterval (()=> {
      this.time = this.datetime.getTime()
    },60000)
  }

  getImg ():any {
    setInterval (() => {
      (this.img == "../../assets/farhat.jpg") ? this.img = "../../assets/intelMorin.jpg" : this.img = "../../assets/farhat.jpg";
      (this.t == 2)? this.t=1 : this.t=2;
    },5000*this.t)
  }
  
  

}
