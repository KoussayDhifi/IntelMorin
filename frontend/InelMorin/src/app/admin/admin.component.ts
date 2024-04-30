import { Component } from '@angular/core';
import { FetchAdminService } from './fetch-admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css' ]
})
export class AdminComponent {
  MailA : any ='' ;
  Password : any ='' ;
  msg:string = '';

  constructor (private fadmin:FetchAdminService) {}
  
  addAdmin() {
    let obj = {
      email:this.MailA,
      password:this.Password
    }

    this.fadmin.addAdmin(obj).subscribe (
      (data:any) => {
        console.log(data);
        this.msg = data.msg;
      }, (err:any) => {
        console.log(err);
        this.msg = err.msg;
      }
    )
  }

}
