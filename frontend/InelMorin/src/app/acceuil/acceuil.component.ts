import { Component, inject } from '@angular/core';
import { TimeService } from './services/time.service';
import { CountAllService } from './services/count-all.service';
import { count } from 'rxjs';

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

  constructor (private count:CountAllService) {}

  ngOnInit() {
    this.getTime();
    this.getImg();
    this.getAll();
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
  
  sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getAll ():void {
    this.count.getStudents().subscribe(
      async (data:any) => {
        for (let i = 0; i<data.student_count; i++) {
          await this.sleep(100/(2^i));
          this.neleves = i;
          
        }
      },
      (err:any) => {
        console.error(err);
      }
    )

    this.count.getTutors().subscribe(
      async (data:any) => {
        for (let i = 0; i<data.tutor_count; i++) {
          await this.sleep(100/(2^i))
          this.nens = i;
        }
      },
      (err:any) => {
        console.error(err);
      }
    )
    this.count.getClassrooms().subscribe(
      async(data:any) => {
        for (let i = 0; i<data.classroom_count; i++) {
          await this.sleep(100/(2^i));
          this.nsalles = i;
        }
      },
      (err:any) => {
        console.error(err);
      }
    )

  }
  
  

}
