import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  public admin:any = {
    name:"Nidhal",
    lastname:"El Euch"
  }


  constructor (private ls:LoginService) {}

  logout() {
    this.ls.logout();
  }

}
