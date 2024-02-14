import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./nav-bar.component.css']
})
export class NavBarComponent {
  public display:string = "display:none";
  public display1:string = "display:none"; 
  

  toggleItems () {
    (this.display == "display:none")? this.display="display:block;" : this.display="display:none";
   
  }
  toggleItems1 () {
    (this.display1 == "display:none")? this.display1="display:block;" : this.display1="display:none";
   
  }

}
