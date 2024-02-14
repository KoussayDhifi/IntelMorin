import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./nav-bar.component.css']
})
export class NavBarComponent {
  public display:string = "display:none";
  

  toggleItems () {
    (this.display == "display:none")? this.display="display:block;" : this.display="display:none";
   
  }

}
