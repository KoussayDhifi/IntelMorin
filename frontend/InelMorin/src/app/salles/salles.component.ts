import { Component } from '@angular/core';
import { FetchSalleService } from './fetch-salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./salles.component.css']
})
export class SallesComponent {
  public nsalles:any = ''; 
  public salles:any = [];
  public msg = '';

  constructor(private fsalle:FetchSalleService) {

  }



  ngOnInit() {
    this.affSalle();
  }


  affSalle() {
    this.fsalle.affSalle().subscribe(
      (data:any) => {
        console.log(data);
        this.salles.length = 0;
        
        for (let i = 0; i<data.length; i++) {
          this.salles.push(data[i]);
        }
        
      }, (err:any) => {
        console.error(err)
      }
    )
  }

  delSalle(obj:any) {
    console.log(obj)

    this.fsalle.delSalle(obj).subscribe (
      (data:any) => {
        console.log(data)
        this.msg = data.msg;
        this.affSalle();
      }, (err:any) => {
        console.error(err);
      }
    )

    
  }

  ajouterSalle() {
    this.fsalle.insertSalle(this.nsalles).subscribe(
      (data:any) => {
        console.log(data);
        this.msg = data.msg;
        this.affSalle();
      }, (err:any) => {
        console.log(err);
      }
    )
    
    
  }

}
