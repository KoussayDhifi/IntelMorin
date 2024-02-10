import { Component } from '@angular/core';

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

}
